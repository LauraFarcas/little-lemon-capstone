import React from 'react';

const specials = [
    { id: 1, name: 'Spaghetti Carbonara', price: '$12.99' },
    { id: 2, name: 'Margherita Pizza', price: '$10.99' },
    { id: 3, name: 'Caesar Salad', price: '$8.99' },
];

const Specials = () => {
    return (
        <div>
            <h2>Today's Specials</h2>
            <ul>
                {specials.map((special) => (
                    <li key={special.id}>
                        {special.name} - {special.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Specials;