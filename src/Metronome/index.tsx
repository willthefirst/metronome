import React from "react";
import layout from "../styles/layout.module.scss";
import BPM from "./BPM";
import Conductor from "./Conductor";
import PlayButton from "./PlayButton";
import { AudioProvider } from './AudioContext'

function Metronome() {
	

	return (
		<div className={layout.container}>
			<AudioProvider value={}>
				<BPM />
				<Conductor />
				<PlayButton />
			</AudioProvider>
		</div>
	);
}

export default Metronome;
