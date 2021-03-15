import React, { useState } from "react"
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';
import './BookingComponent.css';
import firebase from '../util/firebase';
import LabelComponent from "../base/label/label";
import { useNavigate } from 'react-router-dom';

function BookingComponent() {
    var nextSunday = new Date();
    nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()));
    let navigate = useNavigate();

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

    function routeChange() {
        let path = './reporting';
        navigate(path, { replace: true });
    }

    return (
        <form className="bookingForm" onSubmit={handleSubmit}>
            <div className="formBody">
                <div>
                    {LabelComponent("Date")}
                    {LabelComponent("Name")}
                    {LabelComponent("Total attendees")}
                </div>
                <div>
                    <input type="date" name="date" value={attendanceDate} onChange={handleDateChange} />
                    <input type="text" name="name" value={name} onChange={handleNameChange} />
                    <input type="number" name="attendees" value={attendees} onChange={handleAttendeeChange} />
                </div>
            </div>
            <div className="footer">
                <input type="submit" hidden={serviceWorkerRegistration.isOnline() === 'true' ? false : true} value="Submit" />
                <input type="button" onClick={routeChange} hidden={serviceWorkerRegistration.isOnline() === 'true' ? false : true} value="Reporting" />

            </div>
        </form >
    )
};

export default BookingComponent;
