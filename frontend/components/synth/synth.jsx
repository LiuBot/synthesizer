
import React from 'react';
import {NOTE_NAMES, TONES} from "../../util/tones";
import Note from "../../util/note";
import $ from 'jquery';
import NoteKey from './note_key';


// In the constructor, initialize an array of Note instances and setting it to this.notes.
// Flashback: your Note constructor takes a frequency as a parameter, not a string.
// Hint: Use NOTE_NAMES and TONES to return an array mapping note names to the right frequency.

class Synth extends React.Component {
	constructor(props){
		super(props);
		this.notes = NOTE_NAMES.map(key => new Note(TONES[key])); // array of Note instances
	}
//Rewrite onKeyUp and onKeyDown so that 
//if isRecording, call addNotes passing it the store's notes
	onKeyDown(e){
		this.props.keyPressed(e.key);

		if (this.props.isRecording){
			this.props.addNotes(this.props.notes)
		}
	}
	
	onKeyUp(e){
		this.props.keyReleased(e.key);
			if (this.props.isRecording){
				this.props.addNotes(this.props.notes) //adding an empty array
		}
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
		const noteKeys = NOTE_NAMES.map((note,idx) =>(
			<NoteKey key={idx} note={note} pressed={this.props.notes.includes(note)}/>
			))

		return (
			<div className="keyboard">
			<h1>Redux Synth!</h1>
       <div className='note-key-list cf'>{noteKeys}</div>
       </div>
     )
	}
}

export default Synth;