
import React from 'react';

// destructured props argument
const JukeBox = ({tracks, isRecording, startRecording, stopRecording, onPlay}) =>(
	<div>
		<h2>JukeBox</h2>
			<div className="JukeBox">
				<button 
				className="start"
				onClick={startRecording} 
				disabled={isRecording}>
				Play
				</button>

				<button 
				className="stop"
				onClick={stopRecording}
				disabled={!isRecording}>
				Delete
				</button>
			</div>
	</div>
)
export default JukeBox;