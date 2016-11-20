import {START_PLAYING, STOP_PLAYING} from "../actions/playing_actions";

const _defaultState = false;

const isPlayingReducer = (state = _defaultState, action) => {

	switch(action.type){
		case START_PLAYING:
			return true; // true: yes it's playing
		case STOP_PLAYING:
			return false; // false: no it's not playing
		default:
			return state;
	}
}
 

export default isPlayingReducer; 