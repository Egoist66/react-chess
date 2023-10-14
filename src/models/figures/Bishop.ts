import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import bishopWhite from '../../assets/figures/white-bishop.png'
import bishopBlack from '../../assets/figures/black-bishop.png'

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color, cell)

        this.logo = color === Colors.BLACK ? bishopBlack : bishopWhite
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }

        if(this.cell.isEmptyDiagonal(target)){
            return true
        }


        return false
    }
    




}