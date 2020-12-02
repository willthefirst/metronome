import React, { useState } from "react";
import layout from "../styles/layout.module.scss";
import { AudioConsumer } from "./AudioContext";

async function setupSamples(audioContext: AudioContext): Promise<AudioBuffer[]> {
	const samples = [`click.wav`, `accent.wav`];
	const audioBuffers = await Promise.all(
		samples.map(async (sample) => {
			const response = await fetch(`${process.env.PUBLIC_URL}/sounds/${sample}`);
			const arrayBuffer = await response.arrayBuffer();
			return audioContext.decodeAudioData(arrayBuffer);
		})
	);
	return audioBuffers;
}

type PlayButtonProps = {
	isPlaying: boolean;
};

function PlayButton({ isPlaying }: PlayButtonProps) {
	const [playing, setPlaying] = useState(isPlaying);

	return (
		<div className={layout.row}>
			<AudioConsumer>
				{({ audioCtx, createAudioCtx }) => (
					<button
						style={{ width: "100%" }}
						onClick={async () => {
							// We initialize WebAudio here because browsers require a user interaction in order to use WebAudio
							if (!audioCtx) {
								audioCtx = createAudioCtx();
								return;
							}

							// Toggle playing state
							setPlaying(!playing);

							setupSamples(audioCtx)
								.then((audioBuffers) => {
									// This code should get moved...this is for playing the sounds
									// Right now, it just maps through all the sounds and plays them.
									const sources = audioBuffers.map((buffer) => {
										const sampleSource = audioCtx!.createBufferSource();
										sampleSource.buffer = buffer;
										sampleSource.connect(audioCtx!.destination);
										sampleSource.start();
										return sampleSource;
									});
									return sources;
								})
								.catch((error) => console.log(error));

							setPlaying(!playing);
						}}
						aria-label='start-stop'
					>
						{playing ? "Stop" : "Start"}
					</button>
				)}
			</AudioConsumer>
		</div>
	);
}

export default PlayButton;
