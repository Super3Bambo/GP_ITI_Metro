import firestore from '@react-native-firebase/firestore';
import { getPrice } from '../../Algorithm/BookingAlgo'
export async function addTrip(trip) {
    let res = await firestore().collection('Trips').add(trip);
    trip.tripID = res.id;
    return {
        type: 'ADD_TRIP',
        payload: trip
    }
}
export async function updateTrip(priceObj, id) {
    let res = await firestore().collection('Trips').doc(id).update(priceObj);
    return {
        type: 'UPDATE_TRIP',
        payload: "Done Update"
    }
}

export async function getPendingTrips(userid) {
    let trips = []
    let res = await firestore().collection('Trips').where('userID', '==', userid).where('payStatus', '==', 'Unpaid').get();
    res.docs.forEach((trip) => {
        let x = trip._data;
        x.ID = trip.id;
        trips.push(x)    });
    return {
        type: 'WAITING_TRIP',
        payload: trips
    }

}

export  function clearPendingTrips() {
    return {
        type:"CLEAR_WAITING_TRIPS",
        payload:{}
    }
}
export  function clearUserTrips() {
    return {
        type:"CLEAR_USER_TRIPS",
        payload:{}
    }
}

export async function getUserTrips(userid) {
    let trips = []
    let res = await firestore().collection('Trips').where('userID', '==', userid).where('payStatus', '==', 'Paid').get();
    res.docs.forEach((trip) => {
        let x = trip._data;
        x.ID = trip.id;
        trips.push(x)
    });

    return {
        type: 'USER_TRIP',
        payload: trips
    }
}

export function getTripPrice(path, trip) {
    let Price;
    if (trip.toLine == 3 || trip.fromLine == 3)
        Price = getPrice(path, 3);
    else
        Price = getPrice(path);
    return {
        type: 'TRIP_PRICE',
        payload: Price
    }
}

export function clearTrips() {
    
    return {
        type: 'CLEAR_TRIP',
        payload: null
    }
}

