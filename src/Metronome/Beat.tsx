import * as React from "react";
import InputRange from "./InputRange";
import style from "../styles/beat.module.scss";
import cx from "classnames";

export interface BeatState {
	volume: number;
	on: boolean;
}

type BeatProps = {
	volume: number;
	on: boolean;
	onVolumeUpdate: (val: number) => void;
};

function Beat({ volume, on, onVolumeUpdate }: BeatProps) {
	return (
		<div className={style.beat}>
			<InputRange
				vertical={true}
				value={volume}
				min={0}
				max={100}
				on={on}
				onChange={onVolumeUpdate}
				ariaLabelForHandle='beat-slider'
			/>
		</div>
	);
}

export default Beat;
