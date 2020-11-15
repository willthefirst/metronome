import * as React from "react";
import "../styles/beat.scss";

type BeatMarkerProps = {
	on: boolean;
};

function BeatMarker({on}: BeatMarkerProps) {
	return <div className={`beatMarker ${on ? "active" : ""}`}></div>;
}

export default BeatMarker;
