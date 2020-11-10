import styles from '../styles/dot.module.scss';
import Dot from './Dot'

function CurrentBeatOverlay() {
  return (
    <div className={styles.currentBeatOverlay}>
      <Dot color="red" />
    </div>
  );
}

export default CurrentBeatOverlay;
