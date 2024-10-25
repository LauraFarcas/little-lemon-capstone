import React from 'react';
import './CustomersSay.css';

const testimonials = [
    {
        name: 'John Doe',
        image: 'path/to/john-image.jpg',
        rating: 5,
        comment: 'Great service and delicious food!',
    },
    {
        name: 'Jane Smith',
        image: 'path/to/jane-image.jpg',
        rating: 4,
        comment: 'Lovely atmosphere and friendly staff.',
    },
];

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <span key={i} className={i < rating ? 'star filled' : 'star'}>
                ★
            </span>
        );
    }
    return <div className="star-rating">{stars}</div>;
};

const CustomersSay = () => {
    return (
        <div className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={`${testimonial.name}`} className="customer-image" />
                        <div className="customer-details">
                            <h3>{testimonial.name}</h3>
                            <StarRating rating={testimonial.rating} />
                            <p>{testimonial.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomersSay;