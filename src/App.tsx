import React from 'react';
import 'normalize.css'
import './App.css';
import Grid from "./Components/Grid";
import {useSelector} from "react-redux";

const App: React.FC = () => {
    const gameEnd = useSelector((state: any) => state.endGame)
  return (
    <div className="App">
        {
            gameEnd === null
            ? <Grid />
            : gameEnd === 'DRAW' ? 'DRAW' : `The winner is ${gameEnd}`
        }
    </div>
  );
}

export default App;
