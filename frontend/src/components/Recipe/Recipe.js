import styles from './Recipe.module.css';
import Author from '../Author/Author';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useMemo } from 'react';
import { StateContext } from '../../state/context';
import useRecipeAsyncActions from '../../state/asyncActions/recipe';

const Recipe = ({ history }) => {
    const { loadRecipes, removeRecipe } = useRecipeAsyncActions();
    const { id } = useParams();

    const { recipe: recipeState, tokenState } = useContext(StateContext);
    const userName = tokenState?.decodedToken?.userName;
    const { recipes, isPending, error } = recipeState;

    const recipe = useMemo(() => {
        return recipes.find((r) => r._id === id);
    }, [recipes, id]);

    const isRecipeUndefined = recipe === undefined;

    useEffect(() => { // if you paste a recipe link !!!
        if (isRecipeUndefined) loadRecipes();
    }, [isRecipeUndefined, loadRecipes]);

    const handleDelete = (e) => {
        e.preventDefault();
        removeRecipe(id).then(() => history.push('/'));
    };

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
                        <Link to={`/users/${recipe.userName}`}><Author userName={recipe.userName} /></Link>

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
                            <ol className={styles.directions}>
                                {recipe.directions.map((d, i) => {
                                    return <li key={i}>{d}</li>;
                                })}
                            </ol>
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
                        {userName === recipe.userName && (
                            <>
                                <button className={styles.btn}>
                                    <Link to={`/recipe/edit/${recipe._id}`}>
                                        Edit
                                    </Link>
                                </button>
                                <button
                                    className={styles.btn}
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </article>
            )}
        </div>
    );
};

export default Recipe;
