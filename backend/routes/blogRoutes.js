import { login } from '../controllers/auth';
import { createRecipe, allRecipes, recipeById } from '../controllers/recipe';
import { createUser } from '../controllers/user';
import requiresAuth from '../controllers/requires-auth';

function setRoutes(app) {
    app.post('/recipe', requiresAuth, createRecipe);
    app.get('/recipe', allRecipes);
    app.get('/recipe/:id', recipeById);

    app.post('/user', createUser);

    app.post('/auth', login);
}

export default setRoutes;
