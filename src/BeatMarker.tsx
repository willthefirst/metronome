import * as React from "react";
import style from "./styles/beat.module.scss";
import cx from "classnames";

type BeatMarkerProps = {
	on: boolean;
};

function BeatMarker({ on }: BeatMarkerProps) {
	const onOrOff = on ? style.on : style.off;
	return <div className={cx(style.marker, onOrOff)}></div>;
}

export default BeatMarker;
