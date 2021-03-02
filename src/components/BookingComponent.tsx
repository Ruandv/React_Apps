import React from "react"
import './BookingComponent.css';

function BookingComponent() {
    function onButtonClick(e) {
        e.preventDefault();
        alert("hello");
    }
    return (
        <div className="appHolder">
            <input type="text" name="firstName"></input>
            <input type="number" name="peopleCount"></input>
            <button onClick={(e) => onButtonClick(e)}>Submit</button>
        </div>
    )
};

export default BookingComponent;
