import styles from "../styles/input.module.scss";

function InputRange(props) {
	return (
		<div>
			<label htmlFor="bpm">BPM</label>
			<input type='range' name='bpm' {...props} />
		</div>
	)
}

export default InputRange;
