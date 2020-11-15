import React, { useState } from "react";
import InputRange from "./InputRange";
import style from "../styles/bpm.module.scss";

type BPMProps = {
	className?: string;
};

function BPM({ className }: BPMProps) {
	const [bpm, setBPM] = useState(230);
	const [bpmMin] = useState(40);
	const [bpmMax] = useState(240);

	return (
		<div className={className}>
			<span className={style.numDisplay}>{bpm}</span>
			<InputRange value={bpm} min={bpmMin} max={bpmMax} />
		</div>
	);
}

export default BPM;
