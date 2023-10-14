import {FC} from "react";
import styled from "styled-components";
import { Cell } from "../models/Cell";

const StyledCell = styled.div`

  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;


`

interface CellUIProps  {
    classname?: string
    cell: Cell
    selected: boolean
    onClickHandler: () => void

}
export const CellUI: FC<CellUIProps> = ({classname, cell, selected, onClickHandler}) => {

    const cellClasses = `${classname} ${cell.color} ${selected ? 'selected': ''}`
    const availableMove = cell.available && !cell.figure &&  <div className="available" />
    
    return  (
        <StyledCell
            onClick={onClickHandler} 
            data-x={cell.x} 
            data-y={cell.y} 
            className={cellClasses}>
            

          
            {availableMove}
            {cell.figure?.logo && <img src={cell.figure.logo}  />}

        </StyledCell>
    )
}