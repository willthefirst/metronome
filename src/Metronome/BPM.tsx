import React, { useState } from "react";
import InputRange from "./InputRange";
import style from "../styles/bpm.module.scss";
import layout from "../styles/layout.module.scss";
import cx from "classnames";

type BPMProps = {
	className?: string;
};

function BPM({ className }: BPMProps) {
	const [bpm, setBPM] = useState(88);
	const [bpmMin] = useState(40);
	const [bpmMax] = useState(240);

	return (
		<div className={layout.row}>
			<div className={cx(layout.flexCenter, layout.left)}>
				<span className={style.numDisplay}>{bpm}</span>
				<InputRange
					value={bpm}
					min={bpmMin}
					max={bpmMax}
					onChange={setBPM}
					data-testid='bpm-slider'
				/>
			</div>
			<div className={cx(layout.flexCenter, layout.right)}>
				<button>+</button>
				<button>-</button>
			</div>
		</div>
	);
}

export default BPM;
