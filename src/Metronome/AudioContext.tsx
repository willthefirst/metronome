import React from "react";

interface AudioContextProvider {
	audioCtx: AudioContext | undefined;
	createAudioCtx: Function;
}

const defaultValue: AudioContextProvider = {
	audioCtx: undefined,
	createAudioCtx: function(): void {
		const AudioCtx = window.AudioContext;
		const audioCtx = new AudioCtx();
		this.audioCtx = audioCtx;
	}
};

const AudioContext = React.createContext(defaultValue);

export const AudioProvider = AudioContext.Provider;
export const AudioConsumer = AudioContext.Consumer;

export default AudioContext;
