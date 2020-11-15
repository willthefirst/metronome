import React, { useState } from "react";
import InputRange from "./InputRange";

type BPMProps = {
	className?: string;
};

function BPM({ className }: BPMProps) {
	const [bpm, setBPM] = useState(230);
	const [bpmMin] = useState(40);
	const [bpmMax] = useState(240);

	return (
		<div className={className}>
			<InputRange value={bpm} min={bpmMin} max={bpmMax} />
		</div>
	);
}

export default BPM;
