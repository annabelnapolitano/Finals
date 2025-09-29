import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage'; // example page
import ConfirmedBooking from "./Components/ConfirmedBooking";
/*import AboutPage from './Components/AboutPage'; // example page*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
         <Route path="/confirmed" element={<ConfirmedBooking />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

