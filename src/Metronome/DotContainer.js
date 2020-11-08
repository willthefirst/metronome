import styles from "../styles/dot.module.scss";
import Dot from './Dot'

function DotContainer() {
	return (
		<div className={styles.dotContainer}>
			<Dot />
			<Dot />
			<Dot />
			<Dot />
		</div>
	);
}

export default DotContainer;
