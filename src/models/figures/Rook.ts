import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import rookWhite from '../../assets/figures/white-rook.png'
import rookBlack from '../../assets/figures/black-rook.png'

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color, cell)

        this.logo = color === Colors.BLACK ? rookBlack : rookWhite
        this.name = FigureNames.ROOK
    }


    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }

        if(this.cell.isEmptyVertical(target)){
            return true
        }

        if(this.cell.isEmptyHorizontal(target)){
            return true
        }

        return false
    }
    
    
}