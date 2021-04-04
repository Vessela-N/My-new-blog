import './Create.css';
import useToken from '../../common/useToken';
import { useEffect } from 'react';

const Create = ({ history }) => {
    const { token } = useToken();
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

        fetch('http://localhost:3001/recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title: title.value,
                servings: servings.value,
                description: description.value,
                ingredients: ingredients.value,
                directions: directions.value,
                imageUrl: imageUrl.value,
                category: category.value,
                cuisine: cuisine.value,
                country: country.value,
            }),
        }).then(() => {
            console.log('new blog added');
            history.push('/');
        });
    };

    return (
        <div className='create'>
            <h2>Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Recipe title</label>
                <input type='text' id='title' name='title' required />
                <label htmlFor='servings'>Servings</label>
                <input
                    type='number'
                    name='servings'
                    defaultValue='4'
                    id='servings'
                />
                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    id='description'
                    cols='5'
                    rows='5'
                ></textarea>
                <label htmlFor='ingredients'>Ingredients</label>
                <textarea
                    name='ingredients'
                    id='ingredients'
                    rows='12'
                    cols='12'
                ></textarea>
                <label htmlFor='directions'>Directions</label>
                <textarea
                    name='directions'
                    id='directions'
                    rows='10'
                    cols='10'
                ></textarea>

                <label htmlFor='imageUrl'>Image</label>
                <input type='text' name='imageUrl' id='imageUrl' />

                <label htmlFor='category'>Category</label>
                <select name='category' id='category'>
                    <option value='soup'>Soups</option>
                    <option value='salad'>Salads</option>
                    <option value='appetizer'>Appetizers & Snacks</option>
                    <option value='bread'>Bread & Pita</option>
                    <option value='breakfast'>Breakfast & Brunch</option>
                    <option value='main'>Main Dishes</option>
                    <option value='side'>Side Dishes</option>
                    <option value='dessert'>Desserts & Sweets</option>
                    <option value='drinks'>Drinks</option>
                </select>

                <label htmlFor='cuisine'>Cuisine</label>
                <select name='cuisine' id='cuisine'>
                    <option value='arab'>Arab</option>
                    <option value='turkish'>Turkish</option>
                    <option value='georgian'>Georgian</option>
                    <option value='kurdish'>Kurdish</option>
                    <option value='cypriot'>Cypriot</option>
                    <option value='armenian'>Armenian</option>
                    <option value='assyrian'>Assyrian</option>
                    <option value='iranian'>Iranian</option>
                    <option value='azerbaijani'>Azerbaijani</option>
                    <option value='jewish'>Jewish</option>
                </select>

                <label htmlFor='country'>Country</label>
                <select name='country' id='country'>
                    <option value='lebanon'>Lebanon</option>
                    <option value='turkey'>Turkey</option>
                    <option value='cyprus'>Cyprus</option>
                    <option value='egypt'>Egypt</option>
                    <option value='syria'>Syria</option>
                    <option value='palestine'>Palestine</option>
                    <option value='jordan'>Jordan</option>
                    <option value='iraq'>Iraq</option>
                    <option value='kuwait'>Kuwait</option>
                    <option value='iran'>Iran</option>
                    <option value='qatar'>Qatar</option>
                    <option value='bahrein'>Bahrein</option>
                    <option value='oman'>Oman</option>
                    <option value='yemen'>Yemen</option>
                    <option value='saudi-arabia'>Saudi Arabia</option>
                    <option value='uae'>United Arab Emirates</option>
                </select>

                <button value='Create'>Create</button>
            </form>
        </div>
    );
};

export default Create;
