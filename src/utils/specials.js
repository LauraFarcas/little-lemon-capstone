import bruschettaImage from '../assets/bruchetta.svg';
import greekSaladImage from '../assets/greek salad.jpg';
import lemonDessertImage from '../assets/lemon dessert.jpg';
export const specials = [
    {
        id: 1,
        name: 'Greek salad',
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: '$12.99',
        image: greekSaladImage,
    },
    {
        id: 2,
        name: 'Bruschetta',
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: '$5.99',
        image: bruschettaImage,
    },
    {
        id: 3,
        name: 'Lemon Dessert',
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: '$5.00',
        image: lemonDessertImage,
    },
];