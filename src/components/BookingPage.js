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
            <h2>Table reservation</h2>
            <BookingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} availableTimes={filteredAvailableTimes}/>
            {formData.date && (
                <>
                    <h2>Available Slots</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAvailableTimes.map((slot, index) => (
                                <tr key={`${index}`}>
                                    <td>{slot}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2>Booked Slots</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookedSlots
                                .filter(slot => slot.date === formData.date)
                                .map((slot, index) => (
                                    <tr key={`${slot.date}-${slot.time}-${index}`}>
                                        <td>{slot.time}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
};

export default BookingPage;