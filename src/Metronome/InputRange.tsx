import * as React from "react";
import "../styles/input.scss";
import Slider from "react-rangeslider";

type InputRangeProps = {
	orientation?: string,
	value: number
};

function InputRange({ orientation, value }: InputRangeProps) {
	return <Slider orientation={orientation} value={value} />;
}

export default InputRange;