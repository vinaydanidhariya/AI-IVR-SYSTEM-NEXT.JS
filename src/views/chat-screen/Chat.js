import React, { useState } from 'react';

function VoiceConversionApp() {
  const [recognizedText, setRecognizedText] = useState('');
  const recognition = new window.webkitSpeechRecognition();

  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    setRecognizedText(transcript);
  }

  recognition.onspeechend = function() {
    recognition.stop();
  }

  const startRecognition = () => {
    recognition.start();
  }

  return (
    <div>
      <h1>Voice Conversion App</h1>
      <button onClick={startRecognition}>Start Recording</button>
      <p>Recognized Text: {recognizedText}</p>
      {/* Add conversion logic and UI for playback */}
    </div>
  );
}

export default VoiceConversionApp;
