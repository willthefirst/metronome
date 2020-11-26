import React from 'react'

const AudioContext = React.createContext(true);

export const AudioProvider = AudioContext.Provider
export const AudioConsumer = AudioContext.Consumer

export default AudioContext;