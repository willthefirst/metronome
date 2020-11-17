import * as React from "react";
import InputRange from "./InputRange";
import BeatMarker from "./BeatMarker";
import style from "../styles/beat.module.scss";

export interface BeatState {
	volume: number;
	on: boolean;
}

type BeatProps = {
	volume: number;
	on: boolean;
	onVolumeUpdate: (val: number) => void
};

function Beat({ volume, on, onVolumeUpdate }: BeatProps) {
	return (
		<div className={style.beat}>
			<BeatMarker on={on} />
			<InputRange vertical={true} value={volume} min={0} max={100} onChange={onVolumeUpdate} ariaLabelForHandle="beat-slider"/>
		</div>
	);
}

export default Beat;
