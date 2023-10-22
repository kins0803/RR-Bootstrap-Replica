import './App.css';
import NavBar from "./Components/TopBar"
import Background from './Components/Background';
import StoreListing from './Components/StoreListing';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;