import './Form.css';
import { useParams } from 'react-router-dom';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import useRecipeAsyncActions from '../../state/asyncActions/recipe';
import { StateContext } from '../../state/context';
import categories from '../../common/categories';
import cuisines from '../../common/cuisines';
import countries from '../../common/countries';

const getField = (recipe) => (field) => recipe?.[field] || '';
const Form = ({ history }) => {
    const { addRecipe, updateRecipe } = useRecipeAsyncActions();
    const {
        tokenState: { token },
        recipe: recipeState,
    } = useContext(StateContext);
    const { recipes } = recipeState;

    const { id } = useParams();

    const recipe = useMemo(() => {
        if (!id) return undefined;

        return recipes.find((r) => r._id === id);
    }, [id]);
    console.log({ recipe });

    const field = useCallback((field) => getField(recipe)(field), [recipe]);

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, [token, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        const {
            title,
            servings,
            description,
            ingredients,
            directions,
            imageUrl,
            category,
            cuisine,
            country,
        } = e.target;

        const ingredientsList = ingredients.value.split('\n');
        const directionsList = directions.value.split('\n');
        console.log({ ingredientsList, directionsList });

        const newRecipe = {
            title: title.value,
            servings: servings.value,
            description: description.value,
            ingredients: ingredientsList,
            directions: directionsList,
            imageUrl: imageUrl.value,
            category: category.value,
            cuisine: cuisine.value,
            country: country.value,
        };

        console.log({ newRecipe });
        if (id) {
            updateRecipe({
                ...newRecipe,
                _id: id,
                userName: recipe.userName,
            }).then(() => history.push(`/recipe/${id}`));
        } else {
            addRecipe(newRecipe).then(() => history.push('/'));
        }
    };

    return (
        <div className='create'>
            <h2>{id ? 'Edit your recipe' : 'Add a new recipe'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Recipe title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    defaultValue={field('title')}
                    required
                />
                <label htmlFor='servings'>Servings</label>
                <input
                    type='number'
                    name='servings'
                    defaultValue={field('servings') || 4}
                    id='servings'
                />
                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    id='description'
                    cols='5'
                    rows='5'
                    defaultValue={field('description')}
                ></textarea>
                <label htmlFor='ingredients'>Ingredients</label>
                <textarea
                    name='ingredients'
                    id='ingredients'
                    rows='12'
                    cols='12'
                    defaultValue={(field('ingredients') || []).join('\n')}
                ></textarea>
                <label htmlFor='directions'>Directions</label>
                <textarea
                    name='directions'
                    id='directions'
                    rows='10'
                    cols='10'
                    defaultValue={(field('directions') || []).join('\n')}
                ></textarea>

                <label htmlFor='imageUrl'>Image</label>
                <input
                    type='text'
                    name='imageUrl'
                    id='imageUrl'
                    defaultValue={field('imageUrl')}
                />

                <label htmlFor='category'>Category</label>
                <select
                    name='category'
                    id='category'
                    defaultValue={field('category')}
                >
                    {Object.keys(categories).map((c) => (
                        <option key={c} value={c}>
                            {categories[c]}
                        </option>
                    ))}
                </select>

                <label htmlFor='cuisine'>Cuisine</label>
                <select
                    name='cuisine'
                    id='cuisine'
                    defaultValue={field('cuisine')}
                >
                    {Object.keys(cuisines).map((c) => (
                        <option key={c} value={c}>
                            {cuisines[c]}
                        </option>
                    ))}
                </select>

                <label htmlFor='country'>Country</label>
                <select
                    name='country'
                    id='country'
                    defaultValue={field('country')}
                >
                    {countries.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

                <button>{id ? 'Edit' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;
