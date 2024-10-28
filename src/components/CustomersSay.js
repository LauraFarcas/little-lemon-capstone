import React from 'react';
import './CustomersSay.css';

import {testimonials} from '../utils/testimonials';

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
        <div className="testimonials-background">
            <div className="testimonials">
                <div className="testimonials-header">
                    <h1 className="testimonial-title">Testimonials</h1>
                </div>
                <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-rating">
                                <StarRating rating={testimonial.rating} />
                            </div>
                            <div className="testimonial-card-container">
                                <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-profile-picture" />
                                <p className="testimonial-card-author">{testimonial.name}</p>
                            </div>
                            <p className="testimonial-description">{testimonial.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomersSay;