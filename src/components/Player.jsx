import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    let editablePlayerName  = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    function handleChange(event) {
        setPlayerName(event.target.value);
    };

    function handleEditClick (){
        setIsEditing((editing) => !editing);

        if (isEditing){
            onChangeName(symbol,playerName)   
        }
        
    }

    if(isEditing) {
        editablePlayerName = <span className="player">
            <input 
            type="text" required 
            value={playerName} 
            onChange={handleChange}/></span>;
        btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined }>
            <span className="players">
                {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
          </li>
    );
}