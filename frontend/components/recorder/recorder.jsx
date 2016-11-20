
import React from 'react';

// destructured props argument
const Recorder = ({isRecording, startRecording, isPlaying, stopRecording}) =>(
	<div className="recorder">
		<h2>Recorder</h2>
			<div className="recorder-buttons">
				<button 
				className="start"
				onClick={startRecording} 
				disabled={isRecording || isPlaying}>
				Start
				</button>

				<button 
				className="stop"
				onClick={stopRecording}
				disabled={!isRecording && !isPlaying}>
				Stop
				</button>
			</div>
	</div>
)
export default Recorder;