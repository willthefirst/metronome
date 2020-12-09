import React from "react";
import layout from "../styles/layout.module.scss";
import cx from "classnames";
import { BeatState } from "./Beat";

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
		setBeats(beats.slice(0, beats.length - 1));
	};

	return (
		<div className={cx(layout.flexCenter)}>
			<button aria-label='add-beat' onClick={handleAddBeat}>
				+ beat
			</button>
			<button aria-label='remove-beat' onClick={handleRemoveBeat}>
				- beat
			</button>
		</div>
	);
}

export default BeatControls;
