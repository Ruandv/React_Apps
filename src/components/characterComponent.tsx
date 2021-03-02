import React from "react"
import './characterComponent.css';
import { Character } from "../models/Character"

function CharacterComponent(info: Character) {
    return (
        <div key={info.code} className="card">
            <img src={info.imageUrl} alt={info.longDescription} />
            <div className="productInfo">
                <div>
                    <label>Name:</label> {info.name}
                </div>
                <div>
                    <label>Type:</label>{info.type}
                </div>
            </div>
        </div>
    )
};

export default CharacterComponent;
