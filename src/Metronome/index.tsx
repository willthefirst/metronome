import React from "react";
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

let defaultBeats: BeatState[] = [
	{ volume: 100 },
	{ volume: 50 },
	{ volume: 25 },
	{ volume: 50 }
];

let settings = {
	isPlaying: false,
	bpm: 88,
	beats: defaultBeats,
	currentBeatIndex: 0
};

function Metronome() {
	return (
		<div className={layout.container}>
			<AudioProvider
				value={{
					audioCtx: undefined,
					createAudioCtx: createContext
				}}
			>
				<BPM value={settings.bpm} min={40} max={240} />
				<Conductor beats={settings.beats} currentBeatIndex={settings.currentBeatIndex}/>
				<PlayButton isPlaying={settings.isPlaying}/>
			</AudioProvider>
		</div>
	);
}

export default Metronome;
