import { useState } from "react";
import { Cell } from "../models/Cell"
import { Player } from "../models/Player";

export const useBoardCell = (updateBoard: () => void, currentPlayer: Player | null, swapPlayer: () => void) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)


    const selectCurrentCell = (cell: Cell) => {
        return () => {

            if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
                selectedCell.moveFigure(cell)
                swapPlayer()
                setSelectedCell(null)
                updateBoard()
            }
            else {
                if(cell.figure?.color === currentPlayer?.color){
                    setSelectedCell(cell)
                }

            }

            
        }
    }


  
    return {
        selectedCell,
        selectCurrentCell
    }


}