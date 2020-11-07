import styles from "../styles/metronome.module.scss";
import Dot from "./Dot";

function Metronome() {
	return (
		<div className={styles.container}>
			<div className={styles.metronome}>
				<Dot />
				<Dot />
				<Dot />
				<Dot />
			</div>
		</div>
	);
}

export default Metronome;
