import React from "react";
import InputRange from "./InputRange";
import layout from "./styles/layout.module.scss";
import cx from "classnames";
import color from "./styles/color"

type BPMProps = {
	className?: string;
	value: number;
	min: number;
	max: number;
	handleChange: Function;
};

function BPM({ className, value, min, max, handleChange }: BPMProps) {
	const numDisplay = <span className="unselectable" style={{ position: "absolute", zIndex: 1, color: color.primaryDark }}>{value} bpm</span>;
	return (
		<div className={cx(layout.flexCenter, layout.vertCenter)}>
			{numDisplay}
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
