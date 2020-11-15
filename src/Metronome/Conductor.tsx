import React, { useState } from "react";
import Beat, { BeatState } from "./Beat";

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

	return (
		<div className={className}>
			{beats.map((beat, key) => (
				<Beat
					volume={beat.volume}
					on={beat.on}
					key={key}
					onVolumeUpdate={(val) => handleVolUpdate(key, val)}
				/>
			))}
		</div>
	);
}

export default Conductor;
