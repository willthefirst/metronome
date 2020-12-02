import React, { useState } from "react";
import layout from "../styles/layout.module.scss";
import cx from "classnames";
import Beat, { BeatState } from "./Beat";


type ConductorProps = {
	className?: string;
	beats: BeatState[];
};

function Conductor({ className, beats }: ConductorProps) {
	const [playing, setPlaying] = useState();

	let [beats_, setBeats] = useState(beats);

	const handleVolUpdate = (index: number, val: number) => {
		let newBeats = [...beats_];
		newBeats[index].volume = val;
		setBeats(newBeats);
	};

	const handleAddBeat = () => {
		let newBeats = beats_.slice();
		newBeats.push({ volume: 50, isActive: false });
		setBeats(newBeats);
	};

	const handleRemoveBeat = () => {
		setBeats(beats_.slice(0, beats_.length - 1));
	};

	return (
		<div className={layout.row}>
			<div className={cx(layout.flexCenter, layout.left)}>
				{beats.map((beat: BeatState, key: number) => (
					<Beat
						volume={beat.volume}
						isActive={beat.isActive}
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
