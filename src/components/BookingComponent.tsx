import React from "react"
import './BookingComponent.css';

function BookingComponent() {
    function onButtonClick(e) {
        e.preventDefault();
        // data to be sent to the POST request
        let _data = {
            title: "foo",
            body: "bar",
            userId: 1
        }

        fetch('https://ruandv.free.beeceptor.com', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));

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
