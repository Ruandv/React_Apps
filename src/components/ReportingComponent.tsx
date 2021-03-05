import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import './ReportingComponent.css'
import Reservation from "./Reservation"
function ReportingComponent() {
    const [reservationsList, setReservationsList] = useState([]);

    useEffect(() => {
        const reservationRef = firebase.database().ref('Reservation1');
        reservationRef.on('value', (snapshot) => {
            const reservation = snapshot.val();
            const reservationList = [];
            for (let id in reservation) {
                reservationList.push({ id, ...reservation[id] });
            }
            setReservationsList(reservationList);
        });
    }, []);

    return (
        <div className='reporting'>
            {'Current number of Reservations : ' + (reservationsList.length > 0 ? reservationsList.map(a => Number.parseInt(a.attendees)).reduce(function (a, b) {
                return a + b;
            }) : 0)}
            {reservationsList ? reservationsList.map((reservationItem, index) => <Reservation todo={reservationItem} key={index} />) : ""}
        </div>
    )
};

export default ReportingComponent;