import React, { useState } from "react"
import './PokemonComponent.css'
import { Character } from "../models/Character"
import CharacterComponent from "./characterComponent"

export default function PokemonComponent(characterList: Character[]) {
    const [selectedCharacter, setSelectedCharacter] = useState(characterList[0]);
    function onCharacterClick(character: Character, e) {
        setSelectedCharacter(character);
        e.preventDefault();
    }
    return (
        <div className='pokemonApp'>
            <div className="sidebar">
                {characterList.map((item: Character, i) => (
                    <button key={i} onClick={(e) => onCharacterClick(item, e)} className={item.name === selectedCharacter.name ? 'activeLink' : ''} >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="content">
                {CharacterComponent(selectedCharacter)}
            </div>
        </div>

    )
}