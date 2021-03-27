import useFetch from '../../useFetch';
import Banner from '../Banner/Banner';
import RecipeList from '../RecipeList/RecipeList';

const Home = () => {
    const {data: recipes, isPending, error} = useFetch('http://localhost:3001/recipe');

    return (
        <main className="home">
            <Banner />
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {recipes && <RecipeList recipes={recipes} title='All recipes!' />}
        </main>
      );
}
 
export default Home;