import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import { useParams, Link } from "react-router-dom";
import { searchMealsByName } from "../../services/Api";
import { Meal } from "../../types/Meal";
import Footer from "../../components/footer/Footer";

const SearchResults: React.FC = () => {
    const { suchbegriff } = useParams<{ suchbegriff: string }>();
    const [results, setResults] = useState<Meal[]>([]);

    useEffect(() => {
        const fetchResults = async () => {
            if (suchbegriff) {
                const data = await searchMealsByName(suchbegriff);
                setResults(data.meals || []);
            }
        };
        fetchResults();
    }, [suchbegriff]);

    return (
        <div className="search-results">
            <h2>Suchergebnisse für: {suchbegriff}</h2>
            {results.length > 0 ? (
                <ul>
                    {results.map((meal) => (
                        <li key={meal.idMeal}>
                            <Link to={`/meal/${meal.idMeal}`}>
                            <h3>{meal.strMeal}</h3>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
    
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Keine Ergebnisse gefunden</p>
            )}
            <Footer />
        </div>
    );
};

export default SearchResults;