import React from "react";
import color from "./styles/color";
import { ImStop2, ImPlay3 } from "react-icons/im";

type PlayButtonProps = {
	isPlaying: boolean;
	handleToggle: Function;
};

function PlayButton({ isPlaying, handleToggle }: PlayButtonProps) {
	let bgc = isPlaying ? color.dangerLight : color.successLight
	const icon = isPlaying ? <ImStop2 style={{color: color.dangerDark}}/> : <ImPlay3 style={{color: color.successDark}}/>

	return (
	<button style={{ width: "100%", backgroundColor: bgc }} onClick={() => handleToggle()} aria-label='start-stop' >
			{icon}
		</button>

	);
}

export default PlayButton;