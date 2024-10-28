import React from 'react';
import { specials } from '../utils/specials';
import uberImage from '../assets/uberSign.svg';

const Specials = () => {
    console.log(specials);
    return (
        <div className='specials container grid'>
            <div className='specials-header'>
                <h1>Specials</h1>
                <button className="button">Online Menu</button>
            </div>
            <div className='specials-content'>
                {specials.map((special) => (
                    <div key={special.id} className="food-card">
                        <div className="food-card-image">
                            <img src={special.image} alt={special.name} height="200"/>
                        </div>
                        <div className="food-card-body">
                            <div className="food-card-body-header">
                                <div className="food-card-body-title-header">
                                    <p className="food-card-title">{special.name}</p>
                                    <p className="food-card-price">{special.price}</p>
                                </div>
                                <p className="food-card-description">{special.description}</p>
                            </div>
                            <div className="food-card-delivery">
                                <p className="food-card-delivery-title">Order a delivery</p>
                                <img src={uberImage} alt="uber eats"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specials;