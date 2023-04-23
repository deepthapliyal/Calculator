// import mp3 for key press sound effect 
import mp3 from './assets/Enter.mp3'
import Mycalcu from './Mycomponent/Main';

let audio = new Audio(mp3);

//play sound on Keypress
function playAudio() {
  audio.play();
}


function App() {
  return (
<>
 <Mycalcu onButtonClick={playAudio}/>
</>
  );
}

export default App;
