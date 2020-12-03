import React, { useState, useEffect } from "react";
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
	currentBeatIndex: 1
};

let audioCtx: AudioContext | undefined = undefined;

function Metronome() {
	const [isPlaying, setPlaying] = useState(settings.isPlaying);

	useEffect(() => {
		isPlaying ? start() : stop();
	});

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

	const loadSamples = async (): Promise<AudioBufferSourceNode[]> => {
		audioCtx = createContext();

		const audioBuffers = await setupSamples(audioCtx);
		const sources = audioBuffers.map((buffer) => {
			const sampleSource = audioCtx!.createBufferSource();
			sampleSource.buffer = buffer;
			sampleSource.connect(audioCtx!.destination);
			return sampleSource;
		});
		return sources;
	};


	const start = async () => {
		let samples: void | AudioBufferSourceNode[] = [];
		// Initialize audio if needed
		if (!audioCtx) {
			samples = await loadSamples();
		}

		samples[1].start();

		// Update state progressively
	};

	const stop = () => {
		// Stop this shit
	};

	const handlePlayToggle = async () => {
		setPlaying(!isPlaying);
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
