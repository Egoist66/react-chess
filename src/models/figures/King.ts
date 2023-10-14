import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import kingWhite from '../../assets/figures/white-king.png'
import kingBlack from '../../assets/figures/black-king.png'

export class King extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color, cell)

        this.logo = color === Colors.BLACK ? kingBlack : kingWhite
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }

        return true
    }
    
    
}