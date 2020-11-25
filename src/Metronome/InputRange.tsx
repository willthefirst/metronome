import * as React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/input.scss";

type InputRangeProps = {
	vertical?: boolean;
	value: number;
	min: number;
	max: number;
	on?: boolean;
	onChange: (val: number) => void;
	ariaLabelForHandle: string;
};

function InputRange(props: InputRangeProps) {
	let color = {
		primaryLightest: "#f1faee",
		primaryLight: "#a8dadc",
		primaryMedium: "#457b9d",
		primaryDark: "#1d3557",
		accent: "e63946"
	};

	return (
		<Slider
			trackStyle={{
				backgroundColor: props.on ? color.primaryDark :color.primaryLight,
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
				backgroundColor: props.on ? color.primaryMedium : color.primaryLightest,
				width: "100%",
				height: "100%",
				borderRadius: 0
			}}
			{...props}
		/>
	);
}

export default InputRange;
