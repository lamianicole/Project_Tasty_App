import { useNavigate } from "react-router-dom";
import "./SearchBar.css"
import { useState } from "react";

const SearchBar: React.FC = () => {
    const [suchbegriff, setSuchbegriff] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); 
        if (suchbegriff.trim()){
            navigate(`/suche/${suchbegriff}`);
            setSuchbegriff('');
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
        <input 
        type="text"
        value={suchbegriff}
        onChange={(e) => setSuchbegriff(e.target.value)}
        placeholder="Type something to search"
        />
        <button type="submit">Search</button>
    </form>
);
};


export default SearchBar