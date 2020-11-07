import styles from "../styles/metronome.module.scss";
import Dot from "./Dot";
import InputRange from "./InputRange";

function Metronome() {
	return (
		<div className={styles.container}>
			<InputRange />
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
