import { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimeProps {
    currentPlayer: Player | null
    restart: () => void
}

export const Timer: FC<TimeProps> = ({currentPlayer, restart}) => {

    const [blackTime, setBlackTime] = useState<number>(120)
    const [whiteTime, setWhiteTime] = useState<number>(120)
    const timer = useRef<null |ReturnType<typeof setInterval>>(null)

    const startTimer = () => {

    
        if(timer.current){
            clearInterval(timer.current)
        }

        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime

        timer.current = setInterval(() => {
           
          
            callback()
            

           

        }, 1000)
    }

    const decrementBlackTime = () => {
      
     
        setBlackTime(blackTime => blackTime - 1)
        
    }

    
    const decrementWhiteTime = () => {

      
        setWhiteTime(whiteTime => whiteTime - 1)
    }

    const handleRestart = () => {
        restart()
        setWhiteTime(120)
        setBlackTime(120)
    }


    useEffect(() => {
       


        startTimer()
    }, [currentPlayer])


    return (
        <div>

            <div>
                <button id="restart" onClick={handleRestart}>Начать игру заново</button>
            </div>

            <h2>Черные - <span style={{color: 'skyblue'}}>{blackTime}сек</span></h2>
            <h2>Белые - <span style={{color: 'skyblue'}}>{whiteTime}сек</span></h2>

        </div>
    )
}