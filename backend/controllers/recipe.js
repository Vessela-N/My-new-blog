// import cuisines from '../../frontend/src/common/cuisines';
import {load, add, loadById, loadByFilters, del, edit} from '../models/recipe';

const handleError = message => ({
    status: 'error',
    message
})
export function insertRecipe(req, res) {
    // console.log(req.body);
    // console.log(req.token);
    const {userName} = req.token;
    add({...req.body, userName})
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(handleError(err.message)));
}
export function updateRecipe(req, res) {
    console.log(req.body)
    edit(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(handleError(err.message)));
}

export function deleteRecipe(req, res) {
    const id = req.params.id;

    del(id)
      .then(result => res.json(result))
      .catch(err => res.status(400).json(handleError(err.message)))
}

export function allRecipes(req, res) {
    const filters = req.query;
    // console.log(filters);
    const loadFn = filters === undefined ? load : () => loadByFilters(filters);
    loadFn()
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(handleError(err.message)));
}

export function recipeById(req, res) {
    const id = req.params.id;
    loadById(id)
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(handleError(err.message)));
}
