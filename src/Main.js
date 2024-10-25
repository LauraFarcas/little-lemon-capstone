import React from 'react';
import BookingPage from './components/BookingPage';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import Specials from './components/Specials';

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/menu" element={<Specials />} />
            </Routes>
        </>
    );
};

export default Main;