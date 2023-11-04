import './App.css';
import Home from './components/Home'
import { css } from '@emotion/css';

function App() {
  return (
    <div className={css`
        height: 100vh;
        width: 100vw;
        margin: 0;
    `}>
     <Home />
    </div>
  );
}

export default App;
