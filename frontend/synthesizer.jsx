// This is the entry doc
import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note.js'

window.Note = Note;

document.addEventListener("DOMContentLoaded", () =>{ // add event listener, pass it a callback 
	const root = document.getElementById('root');

	ReactDOM.render(<h1> Synthesizer</h1>, root)
})
