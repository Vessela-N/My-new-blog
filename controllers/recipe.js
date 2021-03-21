import { load, save, loadById } from '../models/recipe';

export function createRecipe(req, res) {
    save(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(err));
}

export function allRecipes(req, res) {
    load()
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(err));
}

export function recipeById(req, res) {
    const id = req.params.id;
    loadById(id)
        .then((result) => res.json(result))
        .catch((err) => err.status(400).json(err));
}