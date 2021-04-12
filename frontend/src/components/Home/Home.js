import useFetch from '../../common/useFetch';
import RecipeList from '../RecipeList/RecipeList';
import './Home.css';
import { useParams } from 'react-router-dom';
import Cuisines from '../CuisinesMenu/CuisinesMenu';
import Banner from '../Banner/Banner';
import categories from '../../common/categories';

const Home = () => {
    const { cuisine, category } = useParams();
    const cuisineUrl = cuisine === undefined ? '' : `?cuisine=${cuisine}`;
    const categoryUrl = category === undefined ? '' : `?category=${category}`;

    const { data: recipes, isPending, error } = useFetch(
        `http://localhost:3001/recipe${cuisineUrl || categoryUrl}`
    );

    const getTitle = (cuisine, category) => {
        if (cuisine) return `All ${cuisine} recipes`;
        if (category) return `${categories[category]}`;
        return 'All recipes';
    };

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
                        title={getTitle(cuisine, category)}
                    />
                )}
            </div>
        </main>
    );
};

export default Home;
