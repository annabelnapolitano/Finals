/*import React from 'react';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Homepage />
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage'; // example page
/*import AboutPage from './Components/AboutPage'; // example page*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

