import styles from './Recipe.module.css';
import Author from '../Author/Author';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetch from '../../common/useFetch';

const Recipe = () => {
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
                        <span>{recipe.cuisine}</span>
                        {` recipe from ${recipe.country}`}
                    </h3>

                    <div className={styles.left}>
                        <img src={recipe.imageUrl} alt='recipe' />
                        <Author userName={recipe.userName} />

                        <div className={styles.ingredientsDiv}>
                            <p>{`~ Servings: ${recipe.servings} ~`}</p>
                            <h3 className={styles.recipeTitles}>Ingredients</h3>
                            <ul className={styles.ingredients}>
                                {recipe.ingredients.map((d, i) => {
                                    return <li key={i}>{d}</li>;
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <p className={styles.description}>
                            {recipe.description}
                        </p>
                        <div className={styles.directionsDiv}>
                            <h3 className={styles.recipeTitles}>Directions</h3>
                            <p className={styles.directions}>
                                {recipe.directions}
                            </p>
                        </div>
                        <Link
                            to={`/cuisines/${recipe.cuisine}`}
                            className={styles.categoryLink}
                        >
                            {`${recipe.cuisine} cuisine`}
                        </Link>
                        <Link
                            to={`/categories/${recipe.category}`}
                            className={styles.categoryLink}
                        >
                            {recipe.category}
                        </Link>
                        <Link
                            to={`/countries/${recipe.country}`}
                            className={styles.categoryLink}
                        >
                            {recipe.country}
                        </Link>
                        <button className={styles.btn}>
                            <Link to={'/recipe/edit'}>Edit</Link>
                        </button>
                        <button className={styles.btn}>
                            Delete
                        </button>
                    </div>
                </article>
            )}
        </div>
    );
};

export default Recipe;
