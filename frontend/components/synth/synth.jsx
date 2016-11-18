// To create a container, we need to map the application 
// state and the Store's dispatch to a set of props that
//  get passed to the presentational component. 
//  Fortunately, react-redux provides a function 
//  that does this for us: connect.

import React from 'react';
import {NOTE_NAMES, TONES} from "../../util/tones";
import Note from "../../util/note";


// In the constructor, initialize an array of Note instances and setting it to this.notes.
// Flashback: your Note constructor takes a frequency as a parameter, not a string.
// Hint: Use NOTE_NAMES and TONES to return an array mapping note names to the right frequency.

class Synth extends React.Component {
	constructor(props){
		super(props);
		this.notes = NOTE_NAMES.map(key => new Note(TONES[key])); // array of Note instances
	}

	render(){
		return (
       <div>Synth
        <ul>{
        	this.notes.map((note, idx) => <li key={idx}>{note[0]}</li>
        		)}</ul>
      </div>
     )
	}
}

export default Synth;