import {combineReducers} from 'redux';
import notesReducer from './notes_reducer'; 
import isRecordingReducer from './is_recording_reducer'; 
import tracksReducer from './tracks_reducer'
import isPlayingReducer from './is_playing_reducer';

const rootReducer = combineReducers ({
	notes: notesReducer, // Shape of the state object will match the key here
	tracks: tracksReducer, 
	isRecording: isRecordingReducer,
	isPlaying: isPlayingReducer
})


export default rootReducer;