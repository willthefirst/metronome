import React, { useState } from "react";
import InputRange from "./InputRange";
import style from "../styles/bpm.module.scss";
import layout from "../styles/layout.module.scss";
import cx from "classnames";

type BPMProps = {
	className?: string;
	value: number;
	min: number;
	max: number;
};

function keepInRange(num: number, min: number, max: number): number {
	if (num < min) {
		return min;
	}
	if (num > max) {
		return max;
	}
	return num;
}

function BPM({ className, value, min, max }: BPMProps) {
	const [bpm, setBPM] = useState(value || 88);
	const [bpmMin] = useState(40);
	const [bpmMax] = useState(240);

	return (
		<div className={layout.row}>
			<div className={cx(layout.flexCenter, layout.left)}>
				<span className={style.numDisplay}>{bpm}</span>
				<InputRange
					value={value}
					min={min}
					max={max}
					onChange={setBPM}
					ariaLabelForHandle='bpm-slider'
				/>
			</div>
			<div className={cx(layout.flexCenter, layout.right)}>
				<button
					aria-label='increase-4-bpm'
					onClick={() => setBPM(keepInRange(bpm + 4, bpmMin, bpmMax))}
				>
					+4 bpm
				</button>
				<button aria-label='decrease-4-bpm' onClick={() => setBPM(keepInRange(bpm - 4, bpmMin, bpmMax))}>
					-4 bpm
				</button>
			</div>
		</div>
	);
}

export default BPM;
