import React from "react";
import layout from "../styles/layout.module.scss";
import BPM from "./BPM";
import Conductor from "./Conductor";
import PlayButton from "./PlayButton";
import { AudioProvider } from "./AudioContext";

function createContext(): AudioContext {
	const AudioCtx = window.AudioContext;
	const audioCtx = new AudioCtx();
	return audioCtx;
}

function Metronome() {
	return (
		<div className={layout.container}>
			<AudioProvider
				value={{
					audioCtx: undefined,
					createAudioCtx: createContext
				}}
			>
				<BPM />
				<Conductor />
				<PlayButton />
			</AudioProvider>
		</div>
	);
}

export default Metronome;
