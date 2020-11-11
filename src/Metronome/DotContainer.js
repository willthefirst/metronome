import styles from "../styles/dot.module.scss";
import Dot from "./Dot";
import InputRange from "./InputRange";
import CurrentBeatOverlay from "./CurrentBeatOverlay";

function DotContainer() {
	return (
		<div className={styles.dotContainer}>
			<InputRange />
			<InputRange />
			<InputRange />
			<InputRange />
		</div>
	);
}

export default DotContainer;
