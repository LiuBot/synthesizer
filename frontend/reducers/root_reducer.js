import {combineReducers} from 'redux';
import notesReducer from './notes_reducer'; 
import isRecordingReducer from './is_recording_reducer'; 
import tracksReducer from './tracks_reducer';

const rootReducer = combineReducers ({
	notes: notesReducer, // Shape of the state object will match the key here
	tracks: tracksReducer, // Shape of the state object will match the key here
	isRecording: isRecordingReducer // Shape of the state object will match the key here
})


export default rootReducer;