// This is the entry doc
import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note';
import configureStore from "./store/store";
import Root from "./components/root";

window.Note = Note;

document.addEventListener("DOMContentLoaded", () =>{ // add event listener, pass it a callback 
	const store = configureStore();
	const rootEl = document.getElementById('root');

	ReactDOM.render(<Root store={store}></Root>, rootEl)
	window.store = store;
})
