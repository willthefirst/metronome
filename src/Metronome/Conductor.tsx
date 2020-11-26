import React, { useState } from "react";
import Beat, { BeatState } from "./Beat";
import layout from "../styles/layout.module.scss";
import cx from "classnames";

type ConductorProps = {
	className?: string;
};

function Conductor({ className }: ConductorProps) {
	let defaultBeats: BeatState[] = [
		{ volume: 100, on: true },
		{ volume: 50, on: false },
		{ volume: 25, on: false },
		{ volume: 50, on: false }
	];

	let [beats, setBeats] = useState(defaultBeats);

	const handleVolUpdate = (index: number, val: number) => {
		let newBeats = [...beats];
		newBeats[index].volume = val;
		setBeats(newBeats);
	};

	const handleAddBeat = () => {
		let newBeats = beats.slice();
		newBeats.push({ volume: 50, on: false });
		setBeats(newBeats);
	};

	const handleRemoveBeat = () => {
		setBeats(beats.slice(0, beats.length - 1));
	};

	return (
		<div className={layout.row}>
			<div className={cx(layout.flexCenter, layout.left)}>
				{beats.map((beat, key) => (
					<Beat
						volume={beat.volume}
						on={beat.on}
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
