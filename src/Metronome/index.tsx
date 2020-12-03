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
	currentBeatIndex: 0
};

let audioCtx: AudioContext | undefined = undefined;
let samples: AudioBufferSourceNode[] = [];
let nextBeatTime: number = 0;
const notesInQueue: { note: number; time: number }[] = [];
let timerID: number | undefined;
// Update state progressively
let lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
let scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)

let audioBuffers: [] | AudioBuffer[] = [];

function Metronome() {
	const [isPlaying, setPlaying] = useState(settings.isPlaying);
	const [bpm, setBPM] = useState(settings.bpm);
	const [currentBeatIndex, setCurrentBeat] = useState(settings.currentBeatIndex);
	const [beats, setBeats] = useState(settings.beats);

	console.log(`Top level: ${currentBeatIndex}`);

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

	const loadSamples = async () => {
		audioCtx = createContext();
		audioBuffers = await setupSamples(audioCtx);
	};

	const playSound = (buffer: AudioBuffer | null) => {
		const sampleSource = audioCtx!.createBufferSource();
		sampleSource.buffer = buffer;
		sampleSource.connect(audioCtx!.destination);
		sampleSource.start();
		return sampleSource;
	};

	function incrementBeat(prevBeat: number) {
		const secondsPerBeat = 60.0 / bpm;

		nextBeatTime += secondsPerBeat; // Add beat length to last beat time

		// Advance the beat number, wrap to zero
		if (prevBeat >= beats.length - 1) {
			return 0;
		} else {
			return prevBeat + 1;
		}
	}

	function scheduleNote(beatNumber: number, time: number) {
		// push the note on the queue, even if we're not playing.
		notesInQueue.push({ note: beatNumber, time: time });
		if (beatNumber === 0) {
			playSound(audioBuffers[1]); // beat sound
		} else {
			playSound(audioBuffers[0]); // accent sound
		}
	}

	function scheduler() {
		// While there are notes that will need to play before the next interval, schedule them and advance the pointer.
		while (nextBeatTime < audioCtx!.currentTime + scheduleAheadTime) {
			setCurrentBeat((prevBeat) => {
				scheduleNote(prevBeat, nextBeatTime);
				return incrementBeat(prevBeat);
			});
		}
		timerID = window.setTimeout(scheduler, lookahead);
	}

	const start = async () => {
		console.log("Start");
		// Initialize audio if needed
		if (!audioCtx) {
			await loadSamples();
		} // check if context is in suspended state (autoplay policy)
		else if (audioCtx.state === "suspended") {
			audioCtx.resume();
		}

		nextBeatTime = audioCtx!.currentTime;
		scheduler();
	};

	const stop = () => {
		window.clearTimeout(timerID);
	};

	const handlePlayToggle = async () => {
		setPlaying(!isPlaying);
	};

	useEffect(() => {
		console.log("effect!");
		isPlaying ? start() : stop();
	}, [isPlaying]);

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
