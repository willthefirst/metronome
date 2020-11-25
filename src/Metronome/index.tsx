import React from "react";
import layout from "../styles/layout.module.scss";
import BPM from "./BPM";
import Conductor from "./Conductor";
import PlayButton from "./PlayButton";

function Metronome() {
	return (
		<div className={layout.container}>
			<BPM />
			<Conductor />
			<PlayButton />
		</div>
	);
}

export default Metronome;
