import {KEY_PRESSED, KEY_RELEASED, GROUP_UPDATE} from "../actions/notes_actions";

import {NOTE_NAMES} from "../util/tones";
import merge from 'lodash/merge';

const _defaultState = [];

const notesReducer = (state = _defaultState, action) =>{
	Object.freeze(state);
	let dupState = merge([], state); // use merge to create deep copy

	switch(action.type){
		//return a new state with the action.key appeneded if the 
		//note isn't already playing
		case KEY_PRESSED:
			if (!dupState.includes(action.key) && NOTE_NAMES.includes(action.key)){ 
					dupState.push(action.key);
			}
			return dupState;	

		case KEY_RELEASED:
			if (dupState.includes(action.key) && NOTE_NAMES.includes(action.key)){
				dupState = dupState.filter( key => (key !== action.key));
				}
			return dupState;

		case GROUP_UPDATE:
			return action.notes;

		default:
			return state;
		}
}

export default notesReducer;