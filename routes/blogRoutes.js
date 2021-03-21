import { login } from '../controllers/auth';
import { createRecipe, allRecipes, recipeById } from '../controllers/recipe';
import { createUser } from '../controllers/user';

function setRoutes(app) {
    app.post('/recipe', createRecipe);
    app.get('/recipe', allRecipes);
    app.get('/recipe/:id', recipeById);

    app.post('/user', createUser);
    
    app.post('/auth', login);
}

export default setRoutes;
