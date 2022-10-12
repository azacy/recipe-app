// import React from "react";

// const RecipeCard = ({recipe}) =>{
//     const {idMeal,strMeal, strCategory, strMealThumb} = recipe;
//     return (
//         <div className="card">
//             ,<img src="strMealThumb" alt="strMeal" className="card-image"
//              />
//              <div className="card-body">
//                 <span className="category">{strCategory}</span>
//                 <h3>{strMeal}</h3>
//                 <a href={"https://www.themealidb.com/meal/" + idMeal} target="_blank">Ingredients</a>             
//                 </div>
//         </div>
//     )
// }
// export default RecipeCard;


import React from "react";
const RecipeCard = ({ recipe }) => {
    // const {
    //     idMeal,
    //     strMeal,
    //     strCategory,
    //     strMealThumb,
    // } = recipe;
    
    return (
        <div className="card">
            <img
                src={recipe.photo}
                alt=""
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{recipe.recipeName}</span>
                {/* <h3>{recipe.photo}</h3> */}
                <h3>Name: {recipe.name}</h3>
                <h3>Tags: {recipe.description}</h3>
                <h3>Duration: {recipe.duration}</h3>
                <h3>{recipe.ingredients}</h3>
            </div>
        </div>
    )
};

export default RecipeCard;

