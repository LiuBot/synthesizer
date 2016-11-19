// Living here: the action creators that change the app's notes.
export const START_PLAYING = "START_PLAYING";
export const STOP_PLAYING = "STOP_PLAYING";

export const startPlaying = () => ({
	type: START_PLAYING
})

export const stopPlaying = () => ({
	type: STOP_PLAYING
})