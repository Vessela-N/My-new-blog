import './Create.css';

const Create = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <div className='create'>
            <h1>Add a new recipe</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title-input'>Recipe title</label>
                <input type='text' id="title-input" required />

                <label htmlFor=''>Servings</label>
                <input type='number' defaultValue='4' />

                <label htmlFor=''>Description</label>
                <input type='text' />

                <label htmlFor=''>Ingredients</label>
                <textarea name='' id=''></textarea>

                <label htmlFor=''>Directions</label>
                <textarea name='' id=''></textarea>

                <label htmlFor=''>Image</label>
                <input type='text' />

                <label htmlFor=''>Category</label>
                <select name='' id=''>
                    <option value='soup'>Soups</option>
                    <option value='salad'>Salads</option>
                    <option value='appetizer'>Appetizers & Snacks</option>
                    <option value='bread'>Bread & Pita</option>
                    <option value='breakfast'>Breakfast & Brunch</option>
                    <option value='main'>Main Dishes</option>
                    <option value='side'>Side Dishes</option>
                    <option value='dessert'>Desserts & Sweets</option>
                </select>

                <label htmlFor=''>Cuisine</label>
                <select name='' id=''>
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

                <label htmlFor=''>Country</label>
                <select name='' id=''>
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

                <input type="submit" className="create-submit" value="Create"/>
            </form>
        </div>
    );
};

export default Create;
