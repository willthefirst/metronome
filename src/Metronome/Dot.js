import styles from '../styles/dot.module.scss';

function Dot({...props}) {
  const { color } = props;
  return (
    <div className={styles.dot} style={{backgroundColor: color}}></div>
  );
}

export default Dot;
