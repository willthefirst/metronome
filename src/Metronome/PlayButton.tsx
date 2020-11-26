import React, { useState } from "react";
import layout from "../styles/layout.module.scss";

async function getSample(audioContext: AudioContext, filepath: string) {
	const response = await fetch(filepath);
	const arrayBuffer = await response.arrayBuffer();
	const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
	return audioBuffer;
}

function PlayButton() {
	const [playing, setPlaying] = useState(false);

	return (
		<div className={layout.row}>
			<button
				style={{ width: "100%" }}
				onClick={() => {
					setPlaying(!playing);
					const AudioContext = window.AudioContext;
					const audioCtx = new AudioContext();
					getSample(audioCtx, `${process.env.PUBLIC_URL}/sounds/click.wav`).then((audioBuffer) => {
                        const sampleSource = audioCtx.createBufferSource();
                        sampleSource.buffer = audioBuffer;
                        sampleSource.connect(audioCtx.destination)
                        sampleSource.start();
                        return sampleSource;
                    });
				}}
				aria-label='start-stop'
			>
				{playing ? "Stop" : "Start"}
			</button>
		</div>
	);
}

export default PlayButton;
