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
		<div className={style.beat} data-testid="beat">
			<BeatMarker on={on} />
			<InputRange orientation='vertical' value={volume} min={0} max={100} onChange={onVolumeUpdate} />
		</div>
	);
}

export default Beat;
