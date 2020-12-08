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
	currentBeat: -1
};

let audioCtx: AudioContext | undefined = undefined;
let nextBeatTime: number = 0;
let timerID: number | undefined;
let lookahead = 100.0; // How frequently to call scheduling function (in milliseconds)
let scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
const notesInQueue: { note: number; time: number }[] = [];

let audioBuffers: [] | AudioBuffer[] = [];

const getNextNoteTime = (currTime: number, bpm: number) => {
	const secondsPerBeat = 60.0 / bpm;
	return currTime + secondsPerBeat;
};

function scheduleNote(beatNumber: number, time: number) {
	notesInQueue.push({ note: beatNumber, time: time });
	if (beatNumber === 0) {
		playSoundAtTime(audioBuffers[1], time); // beat sound
	} else {
		playSoundAtTime(audioBuffers[0], time); // accent sound
	}
}

const playSoundAtTime = (buffer: AudioBuffer | null, time: number) => {
	const sampleSource = audioCtx!.createBufferSource();
	sampleSource.buffer = buffer;
	sampleSource.connect(audioCtx!.destination);
	sampleSource.start(time);
};

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

function nextBeat(prevBeat: number, numBeats: number): number {
	// Advance the beat number, wrap to zero
	if (prevBeat >= numBeats || prevBeat === -1) {
		return 0;
	} else {
		return prevBeat + 1;
	}
}

function Metronome() {
	const [isPlaying, setPlaying] = useState(settings.isPlaying);
	const [bpm, setBPM] = useState(settings.bpm);
	const [currentBeat, setCurrentBeat] = useState(settings.currentBeat);
	const [beats] = useState(settings.beats);

	const start = async () => {
		// Initialize audio if needed
		if (!audioCtx) {
			await loadSamples();
		} // check if context is in suspended state (autoplay policy)
		else if (audioCtx.state === "suspended") {
			audioCtx.resume();
		}

		nextBeatTime = audioCtx!.currentTime;
	};

	useEffect(() => {
		function scheduler() {
			const currentTime = audioCtx!.currentTime;

			// While there are notes that will need to play before the next interval, schedule them and advance the pointer.
			setCurrentBeat((prevBeat) => {
				while (nextBeatTime < currentTime + scheduleAheadTime) {
					scheduleNote(nextBeat(prevBeat, beats.length - 1), nextBeatTime);
					nextBeatTime = getNextNoteTime(currentTime, bpm);
					return prevBeat;
				}
				return prevBeat;
			});

			timerID = window.setTimeout(scheduler, lookahead);
		}

		function pollForBeat() {
			const currentTime = audioCtx!.currentTime;

			// Fires when there are notes that need to be played
			while (notesInQueue.length && notesInQueue[0].time < currentTime) {
				console.log(notesInQueue[0].note);
				setCurrentBeat(notesInQueue[0].note);
				notesInQueue.splice(0, 1); // remove note from queue
			}
			requestAnimationFrame(pollForBeat);
		}

		if (isPlaying) {
			scheduler();
			requestAnimationFrame(pollForBeat);
		}
		return () => {
			// cleanup
		};
	}, [isPlaying, beats, bpm]);

	const stop = () => {
		window.clearTimeout(timerID);
	};

	const handlePlayToggle = async () => {
		if (isPlaying) {
			setCurrentBeat(-1);
			stop();
		} else {
			await start();
		}
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
				<BPM value={bpm} min={40} max={240} handleChange={setBPM} />
				<Conductor beats={beats} currentBeat={currentBeat} />
				<PlayButton isPlaying={isPlaying} handleToggle={handlePlayToggle} />
			</AudioProvider>
		</div>
	);
}

export default Metronome;
