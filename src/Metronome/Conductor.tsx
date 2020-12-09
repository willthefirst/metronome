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

	const handleAddBeat = () => {
		let newBeats = beats.slice();
		newBeats.push({ volume: 50 });
		setBeats(newBeats);
	};

	const handleRemoveBeat = () => {
		setBeats(beats.slice(0, beats.length - 1));
	};
	
	return (
		<div className={layout.row}>
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
			<div className={cx(layout.flexCenter, layout.right)}>
				<button aria-label='add-beat' onClick={handleAddBeat}>
					+ beat
				</button>
				<button aria-label='remove-beat' onClick={handleRemoveBeat}>
					- beat
				</button>
			</div>
		</div>
	);
}

export default Conductor;
