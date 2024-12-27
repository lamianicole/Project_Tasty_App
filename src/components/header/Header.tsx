import "./Header.css";
import logoImage from "../../assets/logo/tastyLogo.png"
import SearchBar from "../searchBar/SearchBar";

const Header: React.FC = () => {
    return ( 
        <div className="header">
            <div className="logo-con">
                <img src={logoImage} alt="Tasty Logo" />
            </div>
            <h1>Find a recipe, an idea, an inspiration ...</h1>
            <SearchBar />
        </div>
    );
}

export default Header;