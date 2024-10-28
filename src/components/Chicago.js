import React from 'react';
import chefsMarioAndAdrianAImage from '../assets/Mario and Adrian A.jpg';
import chefsMarioAndAdrianBImage from '../assets/Mario and Adrian b.jpg';

const Chicago = () => {
    return (
        <div className="about">
            <div>
                <h1 className="about-title">Little Lemon</h1>
                <h2 className="about-subtitle">Chicago</h2>
                <p className="about-description">
                    Discover Little Lemon, your delightful escape in the heart of Chicago. Since opening in 2022,
                    we’ve earned a reputation as a beloved gathering place for both locals and visitors.
                    At Little Lemon, we are passionate about crafting mouthwatering dishes with only the freshest,
                    finest ingredients, ensuring every meal leaves a lasting impression."
                    Little Lemon started as an unexpected adventure by Mia, a retired traveler who fell in love with global
                    flavors during her journeys. Inspired by vibrant Mediterranean cuisine, she returned to Chicago with a mission:
                    to bring authentic tastes from around the world to her community. She teamed up with local, self-taught cooks to craft
                    a menu rich with cultural diversity.
                    Today, Little Lemon is a cozy haven where each dish offers a journey through global traditions,
                    inviting diners to savor the flavors of distant lands in the heart of Chicago.
                </p>
            </div>
            <img className="about-image-bruchetta" src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
            <img className="about-image-restaurant" src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    );
};

export default Chicago;