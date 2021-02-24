import React from "react"
import './menuItem.css';
import { MenuItem } from "../models/MenuItem"

function MenuItemComponent(info: MenuItem) {
    return (
        <div key={info.code} className="card">
            <img src={info.imageUrl} alt={info.longDescription} />
            <div className="productInfo">
                <label>Description:</label>{info.shortDescription}
                <label>Price:</label>{info.price}
            </div>

        </div>

    )
};

export default MenuItemComponent;
