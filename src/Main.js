import React, { useState, useEffect } from 'react';
import BookingPage from './components/BookingPage';
import Homepage from './components/Homepage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Specials from './components/Specials';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './utils/apis';
import ConfirmedBooking from './components/ConfirmedBooking';

const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
export const initializeTimes = () => {
    const apiTimes = fetchAPI(new Date());
    console.log('Initializing times:', apiTimes);
    return apiTimes;
};

export const updateTimes = (state, action) => {
    console.log('Updating times:', action.date);
    console.log('Current state:', state);
    console.log('Action:', action);
    switch (action.type) {
        case 'SET_INITIAL_TIMES':
            return action.times;
        case 'UPDATE_TIMES':
            const updatedTimes = fetchAPI(new Date(action.date));
            return updatedTimes;
        default:
            return state;
    }
};

const Main = () => {
    const [bookedSlots, setBookedSlots] = useState([]);

    const [availableTimes, dispatch] = useReducer(updateTimes, defaultTimes);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchInitialTimes() {
            const initialTimes = initializeTimes();
            dispatch({ type: 'SET_INITIAL_TIMES', times: initialTimes });
        }
        fetchInitialTimes();
    }, []);

    const submitForm = (formData) => {
        const apiResponse = submitAPI(formData);
        console.log('Submit Response:', apiResponse);
        if (apiResponse) {
            navigate("/confirmed-booking");
        }
    }

    const handleSubmit = (formData) => {
        if (formData.time && availableTimes.includes(formData.time)) {
            setBookedSlots([...bookedSlots, { date: formData.date, time: formData.time }]);
            submitForm(formData);
            dispatch({ type: 'UPDATE_TIMES', date: formData.date });
        } else {
            alert("Please select a valid available time slot.");
        }
    };
    console.log('Main Available times:', availableTimes);

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes}  bookedSlots={bookedSlots} handleSubmit={handleSubmit} dispatch={dispatch}/>} />
                <Route path="/menu" element={<Specials />} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
            </Routes>
        </>
    );
};

export default Main;