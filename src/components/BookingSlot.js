const BookingSlot = ({ time, booked = false }) => {
    return (
        <li style={{ color: booked ? "red" : "green" }}>
            {time} {booked ? "(Booked)" : "(Available)"}
        </li>
    );
};

export default BookingSlot;
