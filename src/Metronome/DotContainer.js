import styles from "../styles/dot.module.scss";
import InputRange from "./InputRange";

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
