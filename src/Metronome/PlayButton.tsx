import React, { useState } from "react";
import layout from "../styles/layout.module.scss";
import { AudioConsumer } from "./AudioContext";

type PlayButtonProps = {
	isPlaying: boolean;
	handleToggle: Function
};

function PlayButton({ isPlaying, handleToggle }: PlayButtonProps) {
	return (
		<div className={layout.row}>
			<AudioConsumer>
				{({ audioCtx, createAudioCtx }) => (
					<button
						style={{ width: "100%" }}
						onClick={() => handleToggle()} 
						aria-label='start-stop'
					>
						{isPlaying ? "Stop" : "Start"}
					</button>
				)}
			</AudioConsumer>
		</div>
	);
}

export default PlayButton;
