import * as React from "react";
import "../styles/input.scss";
import Slider from "react-rangeslider";

type InputRangeProps = {
	orientation?: string;
};

function InputRange({ orientation }: InputRangeProps) {
	return <Slider orientation={orientation} value={Math.random() * 50} />;
}

export default InputRange;