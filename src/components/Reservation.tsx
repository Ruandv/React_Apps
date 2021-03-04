
import '../App.css';
import firebase from '../util/firebase';

export default function Reservation({ todo: reservationItem }) {
    const deleteReservation = () => {
        const todoRef = firebase.database().ref('Reservation1').child(reservationItem.id);
        todoRef.remove().then(x => {
            alert("We deleted your reservation.")
        });
    };

    return (
        <div>
            <h6>{new Date(reservationItem.bookingDate) + ' - ' + reservationItem.name + ' - ' + reservationItem.attendees}</h6>
            <button onClick={deleteReservation}>Delete</button>
        </div>
    );
}