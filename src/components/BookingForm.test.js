import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

const formData = {
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'birthday'
};

const handleChange = jest.fn();
const handleSubmit = jest.fn();
const availableTimes = ['18:00', '19:00', '20:00'];

test('Renders the BookingForm heading', () => {
    render(<BookingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} availableTimes={availableTimes}/>);
    const headingElement = screen.getByText(/Name:/i);
    expect(headingElement).toBeInTheDocument();
});

test('Renders all form fields', () => {
    render(<BookingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} availableTimes={availableTimes}/>);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

/*test('Calls handleChange on input change', () => {
    render(<BookingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} availableTimes={availableTimes}/>);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2023-10-10' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '19:00' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: 4 } });
    expect(handleChange).toHaveBeenCalled();
});*/

/*test('Calls handleSubmit on form submit', () => {
    render(<BookingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} availableTimes={availableTimes}/>);

    fireEvent.submit(screen.getByRole('button', { name: /Make your reservation/i }));
    expect(handleSubmit).toHaveBeenCalled();
});*/