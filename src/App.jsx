import "@madzadev/audio-player/dist/index.css";
import "./App.css";
import { AudioPlayer } from "./components/AudioPlayer";
import { CompFooter } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AudioPlayer />
      <CompFooter />
    </div>
  );
}

export default App;
