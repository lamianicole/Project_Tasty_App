import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../services/Api';
import { Category } from '../../types/Meal';
import "./Home.css";
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.categories);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };
    loadCategories();
  }, []);

  return (
    <div className="home">
      <Header />
      <main>
        <h2>Or go through our categories</h2>
      <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              to={`/category/${category.strCategory}`} 
              key={category.idCategory}
              className="category-tile-link"
            >
              <div
                className="category-title"
                style={{ backgroundColor: index % 2 === 0 ? '#d4dfc7' : '#96c0b7' }}
              >
                <h3>{category.strCategory}</h3>
                <img src={category.strCategoryThumb} alt={category.strCategory} />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;