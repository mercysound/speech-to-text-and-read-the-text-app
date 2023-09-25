speakBtn.addEventListener('click', ()=>{
   let speachReco = window.speechRecognion || webkitSpeechRecognition;
   let recogniton = new speachReco
   recogniton.interimResults = true
   recogniton.start()
   recogniton.onresult = (event) =>{
     speakResult.value = event.results[0][0].transcript
     let val = event.results[0][0].transcript;
     body.style.backgroundColor = val
    //  console.log(event);
    speakBack(val);

   } 
})  

function speakBack(result){
  if('speechSynthesis' in window){
    var msg = new SpeechSynthesisUtterance()
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1]
    msg.lang = 'en-US'
    msg.text = result;
    msg.volume = 0.8
    window.speechSynthesis.speak(msg)
  
  }else{
    alert("e dey not")
  }
}