import * as React from "react";
import "../styles/beat.scss";

type BeatMarkerProps = {
	className?: string;
};

function BeatMarker({ className }: BeatMarkerProps) {
	return <div className="beatMarker"></div>;
}

export default BeatMarker;
