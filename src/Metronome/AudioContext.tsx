import React from "react";

interface AudioContextProvider {
	audioCtx: AudioContext | undefined;
	createAudioCtx: Function;
}

const defaultValue: AudioContextProvider = {
	audioCtx: undefined,
	createAudioCtx: () => {}
};

const AudioContext = React.createContext(defaultValue);

export const AudioProvider = AudioContext.Provider;
export const AudioConsumer = AudioContext.Consumer;

export default AudioContext;
