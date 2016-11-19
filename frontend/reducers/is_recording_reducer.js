import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from "../actions/tracks_actions";

const _defaultState = false;

const isRecordingReducer = (state = _defaultState, action) =>{
	Object.freeze(state);

	switch(action.type){
		case START_RECORDING:
			return true; // true: yes it's recording
		case STOP_RECORDING:
			return false; // false: no it's not recording
		default:
			return state;
	}
}
 

export default isRecordingReducer; 