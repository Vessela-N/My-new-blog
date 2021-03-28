import useFetch from '../../useFetch';
import Banner from '../Banner/Banner';
import RecipeList from '../RecipeList/RecipeList';
import {useParams} from 'react-router-dom';

const Home = () => {
    const {cuisine, category} = useParams()
    console.log(cuisine);
    const cuisineUrl = cuisine === undefined 
    ? ''
    : `?cuisines=${cuisine}`;

    const {data: recipes, isPending, error} = useFetch(`http://localhost:3001/recipe${cuisineUrl}`);

    return (
        <main className="home">
            <Banner />
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {recipes && <RecipeList recipes={recipes} title='All recipes' />}
        </main>
      );
}
 
export default Home;