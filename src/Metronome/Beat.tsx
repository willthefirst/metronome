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
			<InputRange orientation='vertical' />
		</div>
	);
}

export default Beat;
