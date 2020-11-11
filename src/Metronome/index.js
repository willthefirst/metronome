import layout from "../styles/layout.module.scss";
import InputRange from "./InputRange";
import DotContainer from "./DotContainer";
import cx from "classnames";

function Metronome() {
	return (
		<div className={layout.grid}>
			<div className={layout.flexCenter}>
				<InputRange />
			</div>
			<div className={layout.flexCenter}>
				<button>+</button>
				<button>-</button>
			</div>
			<div className={layout.flexCenter}>
				<DotContainer />
			</div>
			<div className={layout.flexCenter}>
				<button>+</button>
				<button>-</button>
			</div>
		</div>
	);
}

export default Metronome;
