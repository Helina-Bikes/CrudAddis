import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navebar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navebar />
     <Home />
    </div>
  );
}

export default App;
