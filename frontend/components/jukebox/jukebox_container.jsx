import {connect} from 'react-redux';
import {groupUpdate} from "../../actions/notes_actions";
import {startPlaying, stopPlaying} from "../../actions/playing_actions";
import JukeBox from './jukebox';


const mapStateToProps = (state) => ({
	// returning an object that maps the state's tracks and isRecording
	tracks: state.tracks,
	isRecording: state.isRecording,
	isPlaying: state.isPlaying
})


const mapDispatchToProps = (dispatch) => {
	const onPlay = track => e => {
		dispatch(startPlaying());
		const roll = track.roll;
		let playBackStartTime = Date.now();
		let currNote = 0;
		let timeElapsed;

		let interval = setInterval(()=>{ 
			timeElapsed = Date.now() - playBackStartTime;

			if (currNote < roll.length){ // if the track's not over yet
				let currRoll = roll[currNote];

				if (timeElapsed > currRoll.timeSlice){ //exceed the timeSlice 
					dispatch(groupUpdate(currRoll.notes));
					currNote ++;
				} 
			} else { // we've finished playing the track
				clearInterval(interval);
				dispatch(stopPlaying());
			}
		}, 1)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
	)(JukeBox);