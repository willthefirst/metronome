import React from "react";
import layout from "../styles/layout.module.scss";
import BPM from "./BPM";
import Conductor from "./Conductor";

function Metronome() {
	return (
		<div className={layout.container}>
			<BPM />
			<Conductor />
		</div>
	);
}

export default Metronome;
