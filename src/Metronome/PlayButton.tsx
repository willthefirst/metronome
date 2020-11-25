import React, { useState } from "react";
import layout from "../styles/layout.module.scss";

function PlayButton() {
	const [playing, setPlaying] = useState(false);

	return (
		<div className={layout.row}>
			<button
				style={{ width: "100%" }}
				onClick={() => {
					setPlaying(!playing);
				}}
			>
				{playing ? "Stop" : "Start"}
			</button>
		</div>
	);
}

export default PlayButton;
