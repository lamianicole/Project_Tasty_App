import { CategoryResponse, MealResponse, Meal } from "../types/Meal";

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories= async (): Promise<CategoryResponse> => {
    const response = await fetch(`${API_BASE_URL}/categories.php`);
    return response.json(); 
};

export const fetchMealsByCategory = async (category: string): Promise<{ meals: Meal[] }> => {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
    return response.json();
  };

export const fetchMealDetails = async (mealId: string): Promise<{ meals: Meal[] }> => {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${mealId}`);
    return response.json();
};

export const searchMealsByName = async (name: string): Promise<MealResponse> => {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${name}`);
    return response.json(); 
}