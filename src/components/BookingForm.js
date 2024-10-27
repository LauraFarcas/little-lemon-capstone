const BookingForm = (props) => {
    const { formData, handleChange, handleSubmit, availableTimes } = props;
    console.log('BookingForm Available times:', availableTimes);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleSubmit(formData);
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                <label htmlFor="res-name">Name:</label>
                <input
                    type="text"
                    id="res-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="res-date">Choose Date:</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="res-time">Choose Time:</label>
                <select
                    type="time"
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    required
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion" name="occasion">
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit">Make your reservation</button>
        </form>
    );
};

export default BookingForm;