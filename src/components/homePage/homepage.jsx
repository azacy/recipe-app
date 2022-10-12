import React,{useState,useEffect} from "react"
import SearchBar from "../SearchBar/searchbar";
import Navbar from "../navbar/navbar";
import RecipeCard from '../RecipeCard'



function HomePage() {

    const url = "https://recipe-app-frontend.onrender.com/recipe/";


    // const [isLoading, setIsLoading] = useState(false);
    // const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);


    // get all recipes
    const getRecipes = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data);
        // setIsLoading(false);
        console.log("22222",recipes)
        
        
    };

    useEffect(() => {
        getRecipes()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // searchRecipes();
        console.log(recipes)
    }
    return (
        <div><React.Fragment>
            <Navbar />
        </React.Fragment>
            <div className="container">
                <h2>Our Food Recipes</h2>
                <SearchBar
                    // isLoading={isLoading}
                    // query={query}
                    // setQuery={setQuery}
                    // handleSubmit={handleSubmit}
                />
                <div className="recipes">

                    {recipes ? recipes.map(recipe => (
                        <RecipeCard
                            key={recipe._id}
                            recipe={recipe}
                        />
                    )) : "No Results."}
                    
                    <React.Fragment>
                        <navbar />
                    </React.Fragment>
                    
                </div>
            </div>
        </div>
    )

}

export default HomePage;
