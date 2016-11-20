
import React from 'react';
import Track from './track';

// destructured props argument
const JukeBox = ({tracks, isRecording, isPlaying, onPlay, onDelete}) => ( // destructure props 
	<div className="juke-box">
		<h2>JukeBox</h2>
			<div className="tracks-box">

				{Object.keys(tracks).map(id =>(
						<Track 
						key={id}
						track={tracks[id]}
						isRecording={isRecording}
						disabled={isRecording || isPlaying}
						isPlaying={isPlaying}
						onPlay={onPlay(tracks[id])} 
						onDelete={onDelete(id)}
						/>) //  needs ID to be played
				)}

			</div>
	</div>
)
export default JukeBox;
