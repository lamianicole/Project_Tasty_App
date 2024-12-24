import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../../services/Api';
import { Meal } from '../../types/Meal';
import './CategoryPage.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const loadMeals = async () => {
      try {
        if (categoryName) {
          const response = await fetchMealsByCategory(categoryName);
          setMeals(response.meals);
        }
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };
    loadMeals();
  }, [categoryName]);

  return (
    <div className="category-page">
      <Header />
      <main>
        <h4>Everything {categoryName}</h4>
        <div className="meal-grid">
          {meals.map((meal, index) => (
            <Link 
            to={`/meal/${meal.idMeal}`}
            key={meal.idMeal}
            className='meal-title'
            style={{ backgroundColor: index % 2 === 0 ? '#d4dfc7' : '#96c0b7' }}
            >
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>
          ))}
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;