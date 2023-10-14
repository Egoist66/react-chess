import { useState } from "react"
import { Player } from "../models/Player"
import { Colors } from "../models/Colors"

export const usePlayer = () => {
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)


    const swapPlayer = () => {
       setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer ) 
    }

    return {
        setCurrentPlayer,
        whitePlayer,
        currentPlayer,
        swapPlayer
    }

}