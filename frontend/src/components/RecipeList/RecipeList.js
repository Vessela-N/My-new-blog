import { Link } from 'react-router-dom';
import './RecipeList.css';

const RecipeList = ({ recipes, title }) => {
    // const recipes = props.recipes;
    // const title = props.title;
    return (
        <div className='recipe-list'>
            <h2 id="recipes-title">{title}</h2>
            <div className='recipe-list-cards'>
                {recipes.map((recipe) => (
                    <div className='recipe-preview' key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>
                            <img src={recipe.imageUrl} />
                            <h4>{recipe.title}</h4>
                            <p>{recipe.category}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
