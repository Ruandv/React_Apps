import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';

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
        <div>
            {'Current number of Reservations : ' + reservationsList.length}
        </div>
    )
};

export default ReportingComponent;