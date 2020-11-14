import * as React from "react";
import InputRange from "./InputRange";
import BeatMarker from "./BeatMarker";
import styles from "../styles/beat.module.scss";


function Beat() {
	return (
		<div className={styles.beat}>
            <BeatMarker  />
			<InputRange orientation='vertical' />
		</div>
	);
}

export default Beat;
