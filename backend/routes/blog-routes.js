import { login } from '../controllers/auth';
import {insertRecipe, updateRecipe, allRecipes, recipeById, deleteRecipe} from '../controllers/recipe';
import { createUser } from '../controllers/user';
import requiresAuth from '../controllers/requires-auth';

function setRoutes(app) {
    app.post('/recipe', requiresAuth, insertRecipe);
    app.put('/recipe', requiresAuth, updateRecipe);
    app.get('/recipe', allRecipes);
    app.get('/recipe/:id', recipeById);
    app.delete('/recipe/:id', deleteRecipe);

    app.post('/user', createUser);

    app.post('/auth', login);
}

export default setRoutes;
