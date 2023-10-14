import {FC, Fragment} from "react";
import styled from "styled-components";
import {CellUI} from "./CellUI";
import { Board } from "../models/Board";
import { useBoardCell } from "../hooks/useBoardCell";
import { useEffect } from "react";
import { Player } from "../models/Player";

const StyledBoard = styled.div`

  width: calc(64px * 8);
  height: calc(64px * 8);
  display: flex;
  align-items: center;
  flex-wrap: wrap;


`



interface BoardProps  {
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

export const BoardUI: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {

    const updateBoard = () => {
        const newBoard = board?.getCopyBoard()
        if(newBoard){
            setBoard(newBoard)
        }
    }

    const {selectedCell, selectCurrentCell} = useBoardCell(updateBoard, currentPlayer, swapPlayer)


   
    const highlightCell = () =>{
        board?.highlightCells(selectedCell)
        updateBoard()
       
    }



    useEffect(() => {
        highlightCell()
    }, [selectedCell])

    
    const boardCellsElements = board?.cells ? board.cells.map((row, i) => (
        
        <Fragment key={i}>

            {row.map(cell => (
                <CellUI 
                    classname="board-cell"
                    onClickHandler={selectCurrentCell(cell)}
                    selected={(
                        cell.x === selectedCell?.x && cell.y === selectedCell?.y
                    )} 
                    cell={cell} key={cell.id}  
                />
            ))}

        </Fragment>
    )): null


    
    return (

        <div>

            <h3 style={{marginBottom: 20}}>Текущий игрок: <span style={{color: '#ff0042'}}>{currentPlayer?.color.toUpperCase()}</span></h3>

            <StyledBoard className={'board'}>

            
                {boardCellsElements}

            </StyledBoard>
        
        </div>

    
    )
}