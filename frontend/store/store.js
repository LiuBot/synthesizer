import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

//Define a POJO preloadedState that maps notes to an empty array.

const preloadedState = {
		notes: [],
		isRecording: false,
		tracks: {}
}

const configureStore = (state = preloadedState) =>(createStore(rootReducer, state));


export default configureStore;