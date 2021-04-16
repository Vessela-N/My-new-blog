import styles from './Form.module.css';
import { useParams } from 'react-router-dom';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import useRecipeAsyncActions from '../../state/asyncActions/recipe';
import { StateContext } from '../../state/context';
import categories from '../../common/categories';
import cuisines from '../../common/cuisines';
import countries from '../../common/countries';
import { validations } from '../../common/helpers';
import FormError from '../FormError/FormError';
import Footer from '../Footer/Footer';

const getField = (recipe) => (field) => recipe?.[field] || '';
const required = (field) => (val) => {
    if (val.length === 0) return `${field} is required!`;
    return true;
};

const validationFns = {
    title: [required('Title')],
    ingredients: [
        (val) => val.length > 1 || 'This field is required!'
    ],
    directions: [
        (val) => val.length > 1 || 'This field is required!'
    ],
    imageUrl: [required('ImageUrl')],
};

const Form = ({ history }) => {
    const { addRecipe, updateRecipe } = useRecipeAsyncActions();
    const [validationErrors, setValidationErrors] = useState({});
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

    // console.log({ recipe });

    const field = useCallback(
        (f) => {
            return getField(recipe)(f);
        },
        [recipe]
    );

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, [token, history]);

    const errorsForField = useCallback(
        (field) => {
            return validationErrors[field] || [];
        },
        [validationErrors]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
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
        // console.log({ ingredientsList, directionsList });

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
        
        const errors = validations(validationFns, newRecipe);
        // console.log({ errors });
        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
            if (id) {
                updateRecipe({
                    ...newRecipe,
                    _id: id,
                    userName: recipe.userName,
                })
                .then(() => history.push(`/recipe/${id}`));
            } else {
                addRecipe(newRecipe).then(() => history.push('/'));
            }
        }
    };

    return (
        <div className={styles.create}>
            <h2>{id ? 'Edit your recipe' : 'Add a new recipe'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Recipe title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    defaultValue={field('title')}
                />
                <FormError errors={errorsForField('title')} />
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
                    cols='8'
                    rows='8'
                    defaultValue={field('description')}
                ></textarea>
                <label htmlFor='ingredients'>Ingredients</label>
                <textarea
                    name='ingredients'
                    id='ingredients'
                    rows='12'
                    cols='12'
                    placeholder='Write each ingredient on a new line'
                    defaultValue={(field('ingredients') || []).join('\n')}
                ></textarea>
                <FormError errors={errorsForField('ingredients')} />
                <label htmlFor='directions'>Directions</label>
                <textarea
                    name='directions'
                    id='directions'
                    rows='10'
                    cols='10'
                    placeholder='Write each step on a new line'
                    defaultValue={(field('directions') || []).join('\n')}
                ></textarea>
                <FormError errors={errorsForField('directions')} />
                <label htmlFor='imageUrl'>Image</label>
                <input
                    type='text'
                    name='imageUrl'
                    id='imageUrl'
                    placeholder='imageUrl'
                    defaultValue={field('imageUrl')}
                />
                <FormError errors={errorsForField('imageUrl')} />
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
