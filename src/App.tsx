import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'; 
import './App.css';
import CategoryPage from './pages/categoryPage/CategoryPage';
import MealDetails from './pages/mealDetails/MealDetails';
import SearchResults from './pages/searchResults/SearchResults';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/meal/:mealId" element={<MealDetails />} />
          <Route path="/suche/:suchbegriff" element={<SearchResults />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;