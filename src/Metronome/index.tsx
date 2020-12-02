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
	{ volume: 100, isActive: false },
	{ volume: 50, isActive: false },
	{ volume: 25, isActive: true },
	{ volume: 50, isActive: false }
];

let settings = {
	isPlaying: false,
	bpm: 88,
	beats: defaultBeats
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
				<Conductor beats={settings.beats} />
				<PlayButton isPlaying={settings.isPlaying}/>
			</AudioProvider>
		</div>
	);
}

export default Metronome;
