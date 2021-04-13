import useFetch from '../../common/useFetch';
import RecipeList from '../RecipeList/RecipeList';
import './Home.css';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import categories from '../../common/categories';
import CuisinesMenu from '../CuisinesMenu/CuisinesMenu';

const Home = () => {
    const { cuisine, category, country } = useParams();
    const cuisineUrl = cuisine === undefined ? '' : `?cuisine=${cuisine}`;
    const categoryUrl = category === undefined ? '' : `?category=${category}`;
    const countryUrl = country === undefined ? '' : `?country=${country}`;


    const { data: recipes, isPending, error } = useFetch(
        `http://localhost:3001/recipe${cuisineUrl || categoryUrl || countryUrl}`
    );

    const getTitle = (cuisine, category, country) => {
        if (cuisine) return `All ${cuisine} recipes`;
        if (category) return `${categories[category]}`;
        if (country) return `All recipes from ${country}`;
        return 'All recipes';
    };

    return (
        <main className='home'>
            <Banner />
            <CuisinesMenu />
            <div className='home-main'>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {recipes && (
                    <RecipeList
                        recipes={recipes}
                        title={getTitle(cuisine, category, country)}
                    />
                )}
            </div>
        </main>
    );
};

export default Home;
