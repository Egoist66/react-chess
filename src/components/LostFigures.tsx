import { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
 title: string
 figures: Figure[]
}

export const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    
    return (
        <div className="lost"> 
           <h3 style={{marginBottom: 5}}>{title}</h3>

            {figures.map(f => (
                <div style={{display: 'flex', gap: 10}} key={f.id}>

                    <p style={{marginBottom: 5}}>{f.name}</p>
                    <img width={20} height={20} src={f.logo ? f.logo : ''} alt="lost-figure" />

                </div>
            ))} 
        
        </div>
    )
}