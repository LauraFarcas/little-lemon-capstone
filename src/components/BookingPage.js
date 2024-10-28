import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';

const BookingPage = (props) => {
    const { availableTimes, bookedSlots, handleSubmit, dispatch, submitForm} = props;
    console.log('BookingPAGE Available times:', availableTimes);

    const today = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'date') {
            console.log('Date changed:', value);
            dispatch({ type: 'UPDATE_TIMES', date: value });
        }
    };

    console.log('formData.date', formData.date);
    console.log('bookedSlots', bookedSlots);
    const filteredAvailableTimes = formData.date && bookedSlots.some(slot => slot.date === formData.date)
        ? availableTimes.filter(
            (time) => !bookedSlots.some((slot) => slot.date === formData.date && slot.time === time)
        )
        : availableTimes;

    return (
        <>
            <div className="reservation">
                <div className="reservation-card">
                    <h1 className="reservation-title">Table reservation</h1>
                    <BookingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} availableTimes={filteredAvailableTimes}/>
                    {formData.date && (
                        <>
                            <h3>Available Slots</h3>
                            <ul className="inline-list">
                                {filteredAvailableTimes.map((slot, index) => (
                                    <li key={`${index}`}>{slot}</li>
                                ))}
                            </ul>
                            <h3>Booked Slots</h3>
                            <ul className="inline-list">
                                {bookedSlots
                                    .filter(slot => slot.date === formData.date)
                                    .map((slot, index) => (
                                        <li key={`${slot.date}-${slot.time}-${index}`}>{slot.time}</li>
                                    ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default BookingPage;