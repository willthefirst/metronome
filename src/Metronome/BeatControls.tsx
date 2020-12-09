import React from "react";
import layout from "../styles/layout.module.scss";
import cx from "classnames";
import { BeatState } from "./Beat";
import { ImMinus, ImPlus } from "react-icons/im";
import color from "../styles/color";

type BeatControlsProps = {
	className?: string;
	beats: BeatState[];
	setBeats: Function;
};

function BeatControls({ className, beats, setBeats }: BeatControlsProps) {
	const handleAddBeat = () => {
		let newBeats = beats.slice();
		newBeats.push({ volume: 50 });
		setBeats(newBeats);
	};

	const handleRemoveBeat = () => {
		// Minimum beats = 1
		if (beats.length <= 1) {
			return;
		}
		setBeats(beats.slice(0, beats.length - 1));
	};

	let btnStyle = {
		backgroundColor: color.primaryLightest,
		color: color.primaryDark
	};

	return (
		<div className={cx(layout.flexCenter)}>
			<button aria-label='remove-beat' onClick={handleRemoveBeat} style={btnStyle}>
				<ImMinus />
			</button>
			<button aria-label='add-beat' onClick={handleAddBeat} style={btnStyle}>
				<ImPlus />
			</button>
		</div>
	);
}

export default BeatControls;
