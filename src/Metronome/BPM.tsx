import React from "react";
import InputRange from "./InputRange";
import style from "../styles/bpm.module.scss";
import layout from "../styles/layout.module.scss";
import cx from "classnames";

type BPMProps = {
	className?: string;
	value: number;
	min: number;
	max: number;
	handleChange: Function;
};

function BPM({ className, value, min, max, handleChange }: BPMProps) {
	return (
		<div className={cx(layout.flexCenter)}>
			<span className={style.numDisplay}>{value}</span>
			<InputRange
				value={value}
				min={min}
				max={max}
				onChange={(e) => handleChange(e)}
				ariaLabelForHandle='bpm-slider'
			/>
		</div>
	);
}

export default BPM;
