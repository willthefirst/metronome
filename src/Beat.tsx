import * as React from "react";
import InputRange from "./InputRange";
import style from "./styles/beat.module.scss";

export interface BeatState {
	volume: number;
}

type BeatProps = {
	volume: number;
	isActive: boolean;
	onVolumeUpdate: (val: number) => void;
};

function Beat({ volume, isActive, onVolumeUpdate }: BeatProps) {
	return (
		<div className={style.beat}>
			<InputRange
				vertical={true}
				value={volume}
				min={0}
				max={100}
				on={isActive}
				onChange={onVolumeUpdate}
				ariaLabelForHandle='beat-slider'
			/>
		</div>
	);
}

export default Beat;
