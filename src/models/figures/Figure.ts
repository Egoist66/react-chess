import { Cell } from "../Cell";
import { Colors } from "../Colors";
import Logo from '../../assets/figures/black-king.png'

export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон',

}

export class Figure {
   color!: Colors;
   logo!: typeof Logo | null;
   cell!: Cell
   name!: FigureNames
   id!: string | number


    constructor(color: Colors, cell: Cell){
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = crypto.randomUUID()
    }

    canMove(target: Cell): boolean {
        if(target.figure?.color === this.color){
            return false
        }

        if(target.figure?.name === FigureNames.KING){
            return false
        }

        return true
    }

    moveFigure(target: Cell){
        
    }

}