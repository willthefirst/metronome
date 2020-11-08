import layout from "../styles/layout.module.scss";
import InputRange from "./InputRange";
import DotContainer from "./DotContainer";
import cx from "classnames";

function Metronome() {
	return (
		<div className={layout.grid}>
			<div className={layout.colMid}>
				<InputRange className={layout.padVert} />
				<DotContainer />
			</div>
		</div>
	);
}

export default Metronome;
