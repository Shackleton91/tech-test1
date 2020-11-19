import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo />
        <h1>What's The Weather? </h1>
      </header>
      <main>
      <Forecast />
      </main>
      <footer>
        Created by Steve Shackleton
      </footer>
    </div>
  );
}

export default App;
