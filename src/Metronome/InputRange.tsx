import * as React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/input.scss";
import { inherits } from "util";

type InputRangeProps = {
	vertical?: boolean;
	value: number;
	min: number;
	max: number;
	onChange: (val: number) => void;
	ariaLabelForHandle: string
};

function InputRange(props: InputRangeProps) {
	return (
		<Slider
			trackStyle={{
				backgroundColor: "blue",
				width: "100%",
				height: "100%",
				left: 0,
				borderRadius: 0
			}}
			handleStyle={{
				height: 0,
				borderRadius: 0,
				margin: 0,
				border: "none"
			}}
			railStyle={{
				backgroundColor: "red",
				width: "100%",
				height: "100%",
				borderRadius: 0
			}}
			{...props}
		/>
	);
}

export default InputRange;
