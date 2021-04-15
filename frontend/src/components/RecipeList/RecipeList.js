import { Link } from 'react-router-dom';
import './RecipeList.css';
import Author from '../Author/Author';

const RecipeList = ({ recipes, title }) => {
    // const recipes = props.recipes;
    // const title = props.title;
    return (
        <div className='recipe-list'>
            <h2 id='recipes-title'>{title}</h2>
            <div className='recipe-list-cards'>
                {recipes.map((recipe) => (
                    <Link key={recipe._id} to={`/recipe/${recipe._id}`}>
                        <div className='recipe-preview'>
                            <img src={recipe.imageUrl} />
                            <h2>{recipe.title}</h2>
                            <span className='recipe-category'>
                                {recipe.category}
                            </span>
                            <Author userName={recipe.userName} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
