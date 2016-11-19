// container component

import {connect} from 'react-redux';
import Synth from "./synth";
import {keyPressed, keyReleased} from "../../actions/notes_actions";
import {addNotes} from "../../actions/tracks_actions";


//  Define a mapStateToProps (state) function. Return an object that maps state.notes to a notes key. 

const mapStateToProps = (state) => ({
	notes: state.notes,
	isRecording:state.isRecording
})

// Define a mapDispatchToProps(dispatch) function. Return an object containing callback props for 
// your action creators. 

const mapDispatchToProps = (dispatch) =>({
	keyPressed: key => dispatch(keyPressed(key)),
	keyReleased: key => dispatch(keyReleased(key)),
	addNotes: notes => dispatch(addNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Synth);