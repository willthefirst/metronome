import React, { useState } from "react";
import layout from "../styles/layout.module.scss";
import BPM from "./BPM";
import Conductor from "./Conductor";
import PlayButton from "./PlayButton";
import { AudioProvider } from "./AudioContext";
import { BeatState } from "./Beat";

function createContext(): AudioContext {
	const AudioCtx = window.AudioContext;
	const audioCtx = new AudioCtx();
	return audioCtx;
}

let defaultBeats: BeatState[] = [{ volume: 100 }, { volume: 50 }, { volume: 25 }, { volume: 50 }];

let settings = {
	isPlaying: false,
	bpm: 88,
	beats: defaultBeats,
	currentBeatIndex: 0
};

function Metronome() {
	const [isPlaying, setPlaying] = useState(settings.isPlaying);
	let audioCtx = undefined;

	async function setupSamples(audioContext: AudioContext): Promise<AudioBuffer[]> {
		const samples = [`click.wav`, `accent.wav`];
		const audioBuffers = await Promise.all(
			samples.map(async (sample) => {
				const response = await fetch(`${process.env.PUBLIC_URL}/sounds/${sample}`);
				const arrayBuffer = await response.arrayBuffer();
				return audioContext.decodeAudioData(arrayBuffer);
			})
		);
		return audioBuffers;
	}

	const start = () => {
		// Load samples if necessary
				// We initialize WebAudio here because browsers require a user interaction in order to use WebAudio
		if (!audioCtx) {
			audioCtx = createAudioCtx();
			return;
		}

		// Toggle playing state
		setPlaying(!playing);

		setupSamples(audioCtx)
			.then((audioBuffers) => {
				// This code should get moved...this is for playing the sounds
				// Right now, it just maps through all the sounds and plays them.
				const sources = audioBuffers.map((buffer) => {
					const sampleSource = audioCtx!.createBufferSource();
					sampleSource.buffer = buffer;
					sampleSource.connect(audioCtx!.destination);
					sampleSource.start();
					return sampleSource;
				});
				return sources;
			})
			 .catch((error) => console.log(error));
			 
		// Update state progressively
	}	

	const stop = () => {
		// Stop this shit
	}

	const handlePlayToggle = async () => {
		setPlaying(!isPlaying);
		isPlaying ? start() : stop();
	};

	return (
		<div className={layout.container}>
			<AudioProvider
				value={{
					audioCtx: undefined,
					createAudioCtx: createContext
				}}
			>
				<BPM value={settings.bpm} min={40} max={240} />
				<Conductor beats={settings.beats} currentBeatIndex={settings.currentBeatIndex} />
				<PlayButton isPlaying={isPlaying} handleToggle={handlePlayToggle} />
			</AudioProvider>
		</div>
	);
}

export default Metronome;
