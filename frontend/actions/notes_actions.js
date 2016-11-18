// Living here: the action creators that change the app's notes.
export const KEY_PRESSED = "KEY_PRESSED";
export const KEY_RELEASED = "KEY_RELEASED";

export const keyPressed = key => ({
	type: KEY_PRESSED,
	key
	//to let the store know which key to add to its notes array.
})

export const keyReleased = key => ({
	type: KEY_RELEASED,
	key
	//to let the store know which key to remove from its notes array.
})