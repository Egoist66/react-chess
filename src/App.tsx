import { FC, useEffect } from 'react';
import styled from "styled-components";
import {BoardUI} from "./components/BoardUI";
import { useBoard } from './hooks/useBoard';
import { usePlayer } from './hooks/usePlayer';
import { LostFigures } from './components/LostFigures';
import { Timer } from './components/Timer';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  

`



const App: FC = () => {

  const {restart, board, setBoard} = useBoard()
  const {setCurrentPlayer, swapPlayer, whitePlayer, currentPlayer} = usePlayer()

  useEffect(() => {

    restart()
    setCurrentPlayer(whitePlayer)
    
  }, [])

  return (
    <StyledApp className={'app'}>

      <Timer currentPlayer={currentPlayer} restart={restart} />

      <BoardUI 
        board={board}
        currentPlayer={currentPlayer} 
        setBoard={setBoard}
        swapPlayer={swapPlayer} 
      />

      <div style={{
        display:'flex'
      }}>

        <LostFigures figures={board.lostBlackFigures} title={'Черные фигуры'} />
        <LostFigures figures={board.lostWhiteFigures} title={'Белые фигуры'} />

      </div>

    </StyledApp>
  );
}

export default App;
