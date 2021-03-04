import React, { useState } from "react"
import './BookingComponent.css';
import firebase from '../util/firebase';

function BookingComponent() {
    var nextSunday = new Date();
    nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()));


    const [name, setName] = useState('John dos');
    const [attendees, setAttendees] = useState(1);
    const [attendanceDate, setAttendanceDate] = useState(nextSunday.toISOString().substr(0, 10));

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleAttendeeChange(e) {
        setAttendees(e.target.value);
    }

    function handleDateChange(e) {
        setAttendanceDate(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const reservationsRef = firebase.database().ref('Reservation1');
        const reservationData = {
            bookingDate: Date.now(),
            name,
            attendees,
            attendanceDate
        };

        reservationsRef.push(reservationData).then(x => {
            alert("Thank you for your reservation : " + JSON.stringify(x));
        });

    }

    return (
        <form className="bookingForm" onSubmit={handleSubmit}>
            <div className="formBody">
                <div>
                    <label>Date :</label>
                    <input type="date" name="date" value={attendanceDate} onChange={handleDateChange} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Total attendees:</label>
                    <input type="number" name="attendees" value={attendees} onChange={handleAttendeeChange} />
                </div>

            </div>
            <div className="footer">
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
};

export default BookingComponent;
