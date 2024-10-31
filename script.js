//selected the elements
const textInput = document.getElementById('input-text');
const selectedItem = document.querySelector('#select-item');
const playBtn = document.getElementById('PlayBtn');


function voiceBuilding() {
    const textValue = textInput.value;
    const speech = new SpeechSynthesisUtterance();
    speech.text = textValue;
    speech.lang = 'en-US'
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speechSynthesis.speak(speech)
}


playBtn.addEventListener('click', voiceBuilding)