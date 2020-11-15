import React from "react";
import layout from "../styles/layout.module.scss";
import BPM from "./BPM";
import Conductor from "./Conductor";

function Metronome() {
	return (
		<div className={layout.grid}>
			<BPM className={layout.flexCenter} />
			<div className={layout.flexCenter}>
				<button>+</button>
				<button>-</button>
			</div>
			<Conductor className={layout.flexCenter} />
			<div className={layout.flexCenter}>
				<button>+</button>
				<button>-</button>
			</div>
		</div>
	);
}

export default Metronome;
