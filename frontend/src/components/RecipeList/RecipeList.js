import { Link } from 'react-router-dom';
import './RecipeList.css';

const RecipeList = ({ recipes, title }) => {
    // const recipes = props.recipes;
    // const title = props.title;
    return (
        <div className='recipe-list'>
            <h1 id="recipes-title">{title}</h1>
            <div className='recipe-list-cards'>
                {recipes.map((recipe) => (
                    <div className='recipe-preview' key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>
                            <img src={recipe.imageUrl} />
                            <h2>{recipe.title}</h2>
                            <span className='recipe-category'>{recipe.category}</span>
                            <p>{`Recipe by ${recipe.userName}`}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;