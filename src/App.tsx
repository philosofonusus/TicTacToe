import React from 'react';
import Grid from "./Components/Grid";
import { useDispatch, useSelector } from "react-redux";
import { gameReset } from "./redux/actions";
import GameOver from "./Components/GameOver";
import 'normalize.css'
import './App.scss';

const App: React.FC = () => {
    const gameEnd = useSelector((state: any) => state.endGame)
    const counter = useSelector((state: any) => state.counter)
    const dispatch = useDispatch()

  return (
          <div className="container">
              <div className="score-board">
                  <h1>X: {counter.X}</h1>
                  <h1>O: {counter.O}</h1>
              </div>
              {!gameEnd
                  ? <Grid />
                  : <GameOver result={gameEnd} />
              }
            <button onClick={() => dispatch(gameReset())} className="btn-reset">RESET</button>
          </div>
  );
}

export default App;
