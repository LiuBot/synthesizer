import React from 'react';

const SHARPS = ["w","e","t","y","u","o"];

const NoteKey = ({note, pressed}) => (
	<div className={(pressed ? 'note-key pressed' : 'note-key')+(SHARPS.includes(note) ? ' sharp' : "")}>
		{note}
	</div>
	)

export default NoteKey;