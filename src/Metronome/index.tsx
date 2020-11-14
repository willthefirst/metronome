import React from 'react';
import layout from "../styles/layout.module.scss";
import InputRange from "./InputRange";
import Conductor from "./Conductor";

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
			<Conductor className={layout.flexCenter}/>
			<div className={layout.flexCenter}>
				<button>+</button>
				<button>-</button>
			</div>
		</div>
	);
}

export default Metronome;
