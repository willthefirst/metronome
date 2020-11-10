import styles from "../styles/dot.module.scss";
import Dot from "./Dot";
import CurrentBeatOverlay from "./CurrentBeatOverlay";

function DotContainer() {
	return (
		<div className={styles.dotContainer}>
			<Dot color='#c1c1c1' />
			<Dot color='#c1c1c1' />
			<Dot color='#c1c1c1' />
			<Dot color='#c1c1c1' />
		</div>
	);
}

export default DotContainer;
