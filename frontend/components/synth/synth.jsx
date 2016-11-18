// To create a container, we need to map the application 
// state and the Store's dispatch to a set of props that
//  get passed to the presentational component. 
//  Fortunately, react-redux provides a function 
//  that does this for us: connect.

import React from 'react';
import {NOTE_NAMES, TONES} from "../../util/tones";
import Note from "../../util/note";
import $ from 'jquery';


// In the constructor, initialize an array of Note instances and setting it to this.notes.
// Flashback: your Note constructor takes a frequency as a parameter, not a string.
// Hint: Use NOTE_NAMES and TONES to return an array mapping note names to the right frequency.

class Synth extends React.Component {
	constructor(props){
		super(props);
		this.notes = NOTE_NAMES.map(key => new Note(TONES[key])); // array of Note instances
	}

	onKeyDown(e){
		this.props.keyPressed(e.key);
	}
	
	onKeyUp(e){
		this.props.keyReleased(e.key);
	}

	componentDidMount(){
		//user presses key => key listener calls your onKeyDown(e) function, 
		//which dispatches a keyPressed(key) action to the store
		$(document).on("keydown", e => this.onKeyDown(e));

		// user releases key => key listener calls your oneKeyUp(e) function,
		// which dispatches a keyReleased(key) action to the store.
		$(document).on("keyup", e => this.onKeyUp(e));
	}

	playNotes(){
		NOTE_NAMES.forEach((note, idx)=>{ // iterate through key letters
			if (this.props.notes.includes(note[0])){ // if the store includes the key
				this.notes[idx].start(); // start playing the Note 
			} else {
				this.notes[idx].stop();
			}
		})
	}

	render(){
		this.playNotes();
		return (
       <div>Synth</div>
     )
	}
}

export default Synth;