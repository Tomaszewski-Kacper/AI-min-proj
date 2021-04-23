var PianoList = ["Sounds/Piano/A4.mp3","Sounds/Piano/B4.mp3","Sounds/Piano/C4.mp3","Sounds/Piano/D4.mp3","Sounds/Piano/E4.mp3","Sounds/Piano/F4.mp3","Sounds/Piano/G4.mp3"]
var PianoSounds = document.querySelectorAll(".Button")

for(let i=0; i<PianoSounds.length; i++)
{
  PianoSounds[i].addEventListener("click", function()
  {
    let Piano = new Audio(PianoList[i])
    Piano.play();
  },false);
}
