import React from "react";

type PlayButtonProps = {
	isPlaying: boolean;
	handleToggle: Function;
};

function PlayButton({ isPlaying, handleToggle }: PlayButtonProps) {
	return (
		<button style={{ width: "100%" }} onClick={() => handleToggle()} aria-label='start-stop'>
			{isPlaying ? "Stop" : "Start"}
		</button>
	);
}

export default PlayButton;
