import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const BookingForm = (props) => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Must be at least 2 characters")
            .required("Name is required"),
        date: Yup.date()
            .min(new Date(new Date().setDate(new Date().getDate() - 1)), "Date cannot be in the past")
            .required("Date is required"),
        time: Yup.string().required("Time is required"),
        guests: Yup.number()
            .min(1, "Must be at least 1 guest")
            .max(10, "Cannot exceed 10 guests")
            .required("Number of guests is required")
    });
    const { formData, handleChange, handleSubmit, availableTimes } = props;
    console.log('BookingForm Available times:', availableTimes);

    return (
        <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
                console.log('Form submitted:', values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form>
                    <div className="reservation-container">
                        <label className="containter-item-title" htmlFor="res-name">Name:</label>
                        <Field type="text" id="res-name" name="name" />
                    </div>
                    <ErrorMessage className="reservation-error" name="name" component="div" />
                    <div className="reservation-container">
                        <label className="containter-item-title" htmlFor="res-date">Choose Date:</label>
                        <Field
                            type="date"
                            id="res-date"
                            name="date"
                            onChange={(e) => {
                                handleChange(e);
                                setFieldValue('date', e.target.value);
                            }}
                        />
                    </div>
                    <ErrorMessage className="reservation-error" name="date" component="div" />
                    <div className="reservation-container">
                        <label className="containter-item-title" htmlFor="res-time">Choose Time:</label>
                        <Field as="select" id="res-time" name="time">
                            <option value="">Select Time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <ErrorMessage className="reservation-error" name="time" component="div" />
                    <div className="reservation-container">
                        <label className="containter-item-title" htmlFor="guests">Number of Guests:</label>
                        <Field type="number" id="guests" name="guests" />
                    </div>
                    <ErrorMessage className="reservation-error" name="guests" component="div" />
                    <div className="reservation-container">
                        <label className="containter-item-title" htmlFor="occasion">Occasion:</label>
                        <Field as="select" id="occasion" name="occasion">
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="other">Other</option>
                        </Field>
                    </div>
                    <div className="reservation-button">
                        <button className="button" type="submit" disabled={isSubmitting}>
                            Make your reservation
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default BookingForm;