import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Meal } from "../../types/Meal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { fetchMealDetails } from "../../services/Api";
import "./MealDetails.css";

const MealDetails: React.FC = () => {
  const { mealId } = useParams<{ mealId: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const loadMealDetails = async () => {
      if (mealId) {
        try {
          const data = await fetchMealDetails(mealId);
          setMeal(data.meals ? data.meals[0] : null);
        } catch (error) {
          console.error("Error fetching meal details:", error);
        }
      }
    };

    loadMealDetails();
  }, [mealId]);

  if (!meal) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <main className="meal-details-page">
        <section className="meal-details-container">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="meal-details-content">
            <div className="meal-instructions">
              <h5>Instructions</h5>
              {meal.strInstructions
                .split(".")
                .map(
                  (instruction, index) =>
                    instruction.trim() !== "" && (
                      <div key={index}>{instruction.trim()}</div>
                    )
                )}
            </div>
            <div className="meal-ingredients">
              <h6>Ingredients</h6>
              {[
                meal.strIngredient1,
                meal.strIngredient2,
                meal.strIngredient3,
                meal.strIngredient4,
                meal.strIngredient5,
                meal.strIngredient6,
                meal.strIngredient7,
                meal.strIngredient8,
                meal.strIngredient9,
                meal.strIngredient10,
                meal.strIngredient11,
                meal.strIngredient12,
                meal.strIngredient13,
                meal.strIngredient14,
                meal.strIngredient15,
                meal.strIngredient16,
                meal.strIngredient17,
                meal.strIngredient18,
                meal.strIngredient19,
                meal.strIngredient20,
              ].map(
                (ingredient, index) =>
                  ingredient && <div key={index}>{ingredient}</div>
              )}
              {meal.strYoutube && (
                <button
                  type="button"
                  onClick={() => {
                    if (meal.strYoutube) {
                      window.location.href = meal.strYoutube;
                    }
                  }}
                >
                  Watch on YouTube
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MealDetails;
