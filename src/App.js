import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SearchRecipes from './Pages/SearchRecipes';
import RequestFeature from './Pages/RequestFeature';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchRecipes />} />
        <Route path="/request" element={<RequestFeature />} />
      </Routes>
    </Router>
  );
}

export default App;
