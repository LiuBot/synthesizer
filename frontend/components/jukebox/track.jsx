import React from 'react';

const Track = ({track, isRecording, isPlaying, onPlay, onDelete}) =>(
	<div className='track' key={track.id}>
	{track.name}
	<button
		className="play-button"
		disabled={isRecording||isPlaying}
		onClick={onPlay}>
		Play
	</button>

		<button
		className="delete-button"
		disabled={isRecording||isPlaying}
		onClick={onDelete}>
		Delete
	</button>

	</div>
	)

export default Track;