import React from "react";
import layout from "../styles/layout.module.scss";
import cx from "classnames";
import Beat, { BeatState } from "./Beat";

type ConductorProps = {
	className?: string;
	beats: BeatState[];
	currentBeat: number;
	setBeats: Function;
};

function Conductor({ className, beats, currentBeat, setBeats }: ConductorProps) {
	const handleVolUpdate = (index: number, val: number) => {
		let newBeats = [...beats];
		newBeats[index].volume = val;
		setBeats(newBeats);
	};

	return (
		<div className={cx(layout.flexCenter, layout.left)}>
			{beats.map((beat: BeatState, key: number) => (
				<Beat
					volume={beat.volume}
					isActive={key === currentBeat}
					key={key}
					onVolumeUpdate={(val) => handleVolUpdate(key, val)}
				/>
			))}
		</div>
	);
}

export default Conductor;
