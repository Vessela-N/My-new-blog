import { Link } from "react-router-dom";

const RecipeList = ({ recipes, title }) => {
    // const recipes = props.recipes;
    // const title = props.title;
    return (
        <div className='recipe-list'>
            <h2>{title}</h2>
            {recipes.map((recipe) => (
                <div className='recipe-preview' key={recipe._id}>
                    <Link to={`/recipes/${recipe._id}`}>
                    <h4>{recipe.title}</h4>
                    <p>{recipe.category}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;