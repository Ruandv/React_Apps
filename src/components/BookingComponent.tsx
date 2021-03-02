import React, { useState } from "react"
import './BookingComponent.css';
import addNotification from 'react-push-notification';

function BookingComponent() {
    const [name, setName] = useState('John doe');
    const [attendees, setAttendees] = useState(1);

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleAttendeeChange(e) {
        setAttendees(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // data to be sent to the POST request
        let _data = {
            name: name,
            attendees: attendees,
            date: new Date()
        }

        fetch('https://ruandv.free.beeceptor.com', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => { response.json(); })
            .then(json => {
                addNotification({
                    title: 'Warning',
                    subtitle: 'This is a subtitle',
                    message: 'This is a very long message',
                    theme: 'darkblue',
                    native: true // when using native, your OS will handle theming.
                });
            })
            .catch(err => console.log(err));

    }
    return (
        <form className="appHolder" onSubmit={handleSubmit}>
            <label>Name: <input type="text" name="name" value={name} onChange={handleNameChange} />
            </label>
            <label>Total attendees: <input type="number" name="attendees" value={attendees} onChange={handleAttendeeChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
};

export default BookingComponent;
