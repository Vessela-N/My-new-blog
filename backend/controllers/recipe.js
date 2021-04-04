// import cuisines from '../../frontend/src/common/cuisines';
import { load, save, loadById, loadByFilters } from '../models/recipe';

export function createRecipe(req, res) {
    // console.log(req.body);
    // console.log(req.token);
    const {userName} = req.token;
    save({...req.body, userName})
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json({message: err.message}));
}

export function allRecipes(req, res) {
    const filters = req.query;
    // console.log(filters);
    const loadFn = filters === undefined ? load : () => loadByFilters(filters);
    loadFn()
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(err));
}

export function recipeById(req, res) {
    const id = req.params.id;
    loadById(id)
        .then((result) => res.json(result))
        .catch((err) => err.status(400).json(err));
}
