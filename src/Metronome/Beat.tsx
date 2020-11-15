import * as React from "react";
import InputRange from "./InputRange";
import BeatMarker from "./BeatMarker";
import cx from "classnames";

type BeatProps = {
    className?: string;
}

function Beat({className}: BeatProps) {
	return (
		<div className={cx("beat", className)}>
            <BeatMarker className={className} />
			<InputRange orientation='vertical' value={50} min={0} max={100} onChange={()=>{}}/>
		</div>
	);
}

export default Beat;
