import useFetch from './useFetch';
import RecipeList from './RecipeList';

const Home = () => {
    const {data: recipes, isPending, error} = useFetch('http://localhost:3001/recipe');

    return (
        <main className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {recipes && <RecipeList recipes={recipes} title='All recipes!' />}
        </main>
      );
}
 
export default Home;