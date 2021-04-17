import RecipeList from '../RecipeList/RecipeList';
import './Home.css';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import categories from '../../common/categories';
import CuisinesMenu from '../CuisinesMenu/CuisinesMenu';
import { StateContext } from '../../state/context';
import { useContext, useEffect, useMemo } from 'react';
import useRecipeAsyncActions from '../../state/asyncActions/recipe';

const Home = () => {
    const { cuisine, category, country, username } = useParams();

    const { loadRecipes } = useRecipeAsyncActions();
    const { recipe } = useContext(StateContext);
    const { recipes: allRecipes, isPending, error } = recipe;

    useEffect(() => {
        loadRecipes();
    }, []);

    const recipes = useMemo(() => {
        if (cuisine) return allRecipes.filter((r) => r.cuisine === cuisine);
        if (category) return allRecipes.filter((r) => r.category === category);
        if (country) return allRecipes.filter((r) => r.country === country);
        if (username) return allRecipes.filter((r) => r.userName === username);

        return allRecipes;
    }, [allRecipes, cuisine, category, country, username]);

    const getTitle = (cuisine, category, country, username) => {
        if (cuisine) return `All ${cuisine} recipes`;
        if (category) return `${categories[category]}`;
        if (country) return `All recipes from ${country}`;
        if (username) return `${username}'s recipes`;
        return 'All recipes';
    };

    return (
        <main className='home'>
            <Banner />
            <CuisinesMenu />
            <div className='home-main'>
                {error && <div>{error}</div>}
                {isPending && recipes.length === 0 && <div>Loading...</div>}
                {recipes && (
                    <RecipeList
                        recipes={recipes}
                        title={getTitle(cuisine, category, country, username)}
                    />
                )}
            </div>
        </main>
    );
};

export default Home;
