import React, { useState } from "react";
import InputRange from "./InputRange";

type BPMProps = {
	className?: string;
};

function BPM({ className }: BPMProps) {
	const [bpm, setBPM] = useState(5);

	return (
		<div className={className}>
			<InputRange value={bpm} />
		</div>
	);
}

export default BPM;
