import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from "../actions/tracks_actions";
import merge from 'lodash/merge';

let currTrackId = 0; 

const _defaultState = {};

const tracksReducer = (state = _defaultState, action) =>{
	Object.freeze(state)
	let dupState = merge([], state)
	let timeSlice = null;
	let roll = null;

	switch (action.type){
		case START_RECORDING:
			currTrackId ++;
			let newTrack = {
				id: currTrackId, 
				name: `Track ${currTrackId}`, 
				roll: [], 
				timeStart: action.timeNow
			}
			dupState[currTrackId] = newTrack;
			return dupState;

		case STOP_RECORDING:
			timeSlice = action.timeNow - state[currTrackId].timeStart; // this is just to add silent roll
			roll = {notes: [], timeSlice}; // add a silent roll
			dupState[currTrackId].roll.push(roll);
			return dupState;

	// Add a new roll to the current track's roll.
	// Grab the notes played from the action and calculate
	// the timeSlice as you did above.
	// Return the new state.

		case ADD_NOTES:
		// time the note(s) was played
			timeSlice = action.timeNow - state[currTrackId].timeStart;
			// roll are the notes and the time they were played
			roll = {notes: action.notes, timeSlice}
			// add these to the roll
			dupState[currTrackId].roll.push(roll);
			return dupState;

		default:
			return state;
	}

}

export default tracksReducer;