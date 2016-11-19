
import React from 'react';

// destructured props argument
const Recorder = ({isRecording, startRecording, stopRecording}) =>(
	<div>
		<h2>Recorder</h2>
			<div className="recorder">
				<button 
				className="start"
				onClick={startRecording} 
				disabled={isRecording}>
				Start
				</button>

				<button 
				className="stop"
				onClick={stopRecording}
				disabled={!isRecording}>
				Stop
				</button>
			</div>
	</div>
)
export default Recorder;