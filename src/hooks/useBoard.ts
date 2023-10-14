import { useEffect, useState } from "react"
import { Board } from "../models/Board"

export const useBoard = () => {
    const [board, setBoard] = useState(new Board())


    const restart = () => {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.placeFigures()

        setBoard(newBoard)
    }

 

    
    return {
        setBoard,
        board,
        restart
    }

}

