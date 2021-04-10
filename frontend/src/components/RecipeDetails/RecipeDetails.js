import styles from './RecipeDetails.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../common/useFetch';

const RecipeDetails = () => {
    const { id } = useParams();
    const { data: recipe, isPending, error } = useFetch(
        'http://localhost:3001/recipe/' + id
    );
    return (
        <div className={styles.recipeDetails}>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {recipe && (
                <article>
                    <h1>{recipe.title}</h1>

                    <h3 className={styles.smallerTitle}>
                        <span className={styles.cuisineType}>
                            {recipe.cuisine}
                        </span>
                        {` recipe from ${recipe.country}`}
                    </h3>

                    <h3 className={styles.recipeTitles}>
                        {'Recipe by '}
                        <span className={styles.recipeAuthor}>
                            {recipe.userName}
                        </span>
                    </h3>

                    <img src={recipe.imageUrl} alt='recipe' />
                    <p className={styles.description}>{recipe.description}</p>

                    <h3 className={styles.recipeTitles}>Ingredients</h3>
                    <ul className={styles.ingredients}>
                        {recipe.ingredients.map((d, i) => {
                            return <li key={i}>{d}</li>;
                        })}
                    </ul>

                    <h3 className={styles.recipeTitles}>Directions</h3>
                    <p className={styles.directions}>{recipe.directions}</p>
                </article>
            )}
        </div>
    );
};

export default RecipeDetails;
