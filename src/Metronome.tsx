import React, { useState, useEffect, useRef } from "react";
import layout from "./styles/layout.module.scss";
import BPM from "./BPM";
import Conductor from "./Conductor";
import PlayButton from "./PlayButton";
import Row from "./Row";
import { BeatState } from "./Beat";
import BeatControls from "./BeatControls";

declare global {
	interface Window {
		webkitAudioContext: typeof AudioContext;
	}
}

function createContext(): AudioContext {
	const AudioCtx = window.AudioContext || window.webkitAudioContext;
	const audioCtx = new AudioCtx();

	// Added this here to force the audio context to start in Safari 12/20/20.
	// Possibly can remove once Safari fully implements WebAudio.
	if (audioCtx!.state === "suspended") {
		audioCtx.resume();
	}

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
let timerID: NodeJS.Timeout;
let lookahead = 10.0; // How frequently to call scheduling function (in milliseconds)
let scheduleAheadTime = 0.025; // How far ahead to schedule audio (sec)
const notesInQueue: { note: number; time: number }[] = [];

let audioBuffers: [] | AudioBuffer[] | any = [];

const getNextNoteTime = (currTime: number, bpm: number) => {
	const secondsPerBeat = 60.0 / bpm;
	return currTime + secondsPerBeat;
};

function scheduleNote(currentBeat: number, volume: number, time: number) {
	const numNotes = notesInQueue.length;
	if (numNotes) {
		const lastScheduledNote = notesInQueue[numNotes - 1].note;
		if (lastScheduledNote === currentBeat) {
			return;
		}
	}

	notesInQueue.push({ note: currentBeat, time: time });
	if (currentBeat === 0) {
		playSoundAtTime(audioBuffers[1], volume, time); // beat sound
	} else {
		playSoundAtTime(audioBuffers[0], volume, time); // accent sound
	}
}

const playSoundAtTime = (buffer: AudioBuffer | null, volume: number, time: number) => {
	const sampleSource = audioCtx!.createBufferSource();
	const gainNode = audioCtx!.createGain();
	sampleSource.buffer = buffer;
	gainNode.gain.value = volume / 100;

	sampleSource.connect(gainNode);
	gainNode.connect(audioCtx!.destination);
	sampleSource.start(time);
};

function setupSamples() {
	audioCtx = createContext();

	const samples = [`click.mp3`, `accent.mp3`];
	const promises = samples.map(async (sample) => {
		const response = await fetch(`${process.env.PUBLIC_URL}/sounds/${sample}`);
		const arrayBuffer = await response.arrayBuffer();
		// Using callbacks because promise syntax doesn't work in Safari (12/9/20)
		// https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData#Older_callback_syntax
		return new Promise((resolve, reject) => {
			audioCtx!.decodeAudioData(
				arrayBuffer,
				function (result: AudioBuffer): void {
					resolve(result);
				},
				function (e): void {
					reject(e);
				}
			);
		});
	});
	return Promise.all(promises);
}

function nextBeat(prevBeat: any, beats: BeatState[]): number {
	// Advance the beat number, wrap to zero
	if (prevBeat >= beats.length - 1 || prevBeat === -1) {
		return 0;
	} else {
		return prevBeat + 1;
	}
}

function Metronome() {
	const [isPlaying, setPlaying] = useState(settings.isPlaying);
	const isPlayingRef = useRef(settings.isPlaying); // to handle stale closure issue
	const [currentBeat, setCurrentBeat] = useState(settings.currentBeat);
	const currentBeatRef = useRef(settings.currentBeat); // to handle stale closure issue
	const [bpm, setBPM] = useState(settings.bpm);
	const [beats, setBeats] = useState(settings.beats);
	const start = async () => {
		// Initialize audio if needed
		if (!audioCtx) {
			const buffers = await setupSamples();
			audioBuffers = buffers;
		} // check if context is in suspended state (autoplay policy)
		
		if (audioCtx!.state === "suspended") {
			audioCtx!.resume();
		}

		nextBeatTime = audioCtx!.currentTime;
		return;
	};

	useEffect(() => {
		function scheduler() {
			const currentTime = audioCtx!.currentTime;
			// While there are notes that will need to play before the next interval, schedule them and advance the pointer.
			while (nextBeatTime < currentTime + scheduleAheadTime) {
				const beatIndex = nextBeat(currentBeatRef.current, beats);
				const volume = beats[beatIndex].volume;
				scheduleNote(beatIndex, volume, nextBeatTime);
				nextBeatTime = getNextNoteTime(currentTime, bpm);
			}
			timerID = setTimeout(scheduler, lookahead);
		}

		function pollForBeat() {
			const currentTime = audioCtx!.currentTime;

			// Fires when there are notes that need to be played
			while (notesInQueue.length && notesInQueue[0].time < currentTime) {
				currentBeatRef.current = notesInQueue[0].note;
				setCurrentBeat(currentBeatRef.current);
				notesInQueue.splice(0, 1); // remove note from queue
			}

			if (!isPlayingRef.current) {
				return;
			}

			requestAnimationFrame(pollForBeat);
		}

		if (isPlayingRef.current) {
			scheduler();
			requestAnimationFrame(pollForBeat);
		}

		return () => {
			clearTimeout(timerID);
		};
	}, [isPlaying, beats, bpm]);

	const stopAndReset = () => {
		notesInQueue.splice(0);
		currentBeatRef.current = -1;
		setCurrentBeat(currentBeatRef.current);
	};

	const handlePlayToggle = async () => {
		if (isPlaying) {
			stopAndReset();
		} else {
			try {
				await start();
			} catch (error) {
				alert(error.message);
				return;
			}
		}
		isPlayingRef.current = !isPlayingRef.current;
		setPlaying(isPlayingRef.current);
	};

	return (
		<div className={layout.container}>
			<Row height={3}>
				<Conductor beats={beats} currentBeat={currentBeat} setBeats={setBeats} />
			</Row>
			<Row height={1}>
				<BeatControls beats={beats} setBeats={setBeats} />
			</Row>
			<Row height={1}>
				<BPM value={bpm} min={40} max={240} handleChange={setBPM} />
			</Row>
			<Row height={1}>
				<PlayButton isPlaying={isPlaying} handleToggle={handlePlayToggle} />
			</Row>
		</div>
	);
}

export default Metronome;
