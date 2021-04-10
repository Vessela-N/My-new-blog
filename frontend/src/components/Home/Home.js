import useFetch from '../../common/useFetch';
import RecipeList from '../RecipeList/RecipeList';
import './Home.css';
import { useParams } from 'react-router-dom';
import Cuisines from '../CuisinesMenu/CuisinesMenu';
import Banner from '../Banner/Banner';

const Home = () => {
    const { cuisine, category } = useParams();
    const cuisineUrl = cuisine === undefined ? '' : `?cuisine=${cuisine}`;

    const { data: recipes, isPending, error } = useFetch(
        `http://localhost:3001/recipe${cuisineUrl}`
    );

    return (
        <main className='home'>
            <Banner />
            <Cuisines />
            <div className='home-main'>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {recipes && (
                    <RecipeList
                        recipes={recipes}
                        title={
                            cuisine ? `All ${cuisine} recipes` : `All recipes`
                        }
                    />
                )}
            </div>
        </main>
    );
};

export default Home;
