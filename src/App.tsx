import React from 'react';
import 'normalize.css'
import './App.css';
import Grid from "./Components/Grid";
import {useSelector} from "react-redux";
import {Store} from "redux";

const App: React.FC = () => {
    //@ts-ignore
    const gameEnd = useSelector((state: Store) => state.endGame)
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
