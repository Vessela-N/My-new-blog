import { get, post, del, put } from './endpoint';
import { useContext } from 'react';
import { StateContext } from '../state/context';

const getRecipes = () => get('/recipe');

export default function useService() {
    const {
        tokenState: { token },
    } = useContext(StateContext);

    const addRecipe = (r) =>
        post('/recipe', { body: JSON.stringify(r) }, token);
    const editRecipe = (r) =>
        put(`/recipe`, { body: JSON.stringify(r) }, token);
    const deleteRecipe = (id) => del(`/recipe/${id}`, {}, token);

    const login = (userName, password) =>
        post('/auth', { body: JSON.stringify({ userName, password }) });
    const register = (userInfo) =>
        post('/user', { body: JSON.stringify(userInfo) });

    return {
        getRecipes,
        addRecipe,
        editRecipe,
        deleteRecipe,

        login,
        register,
    };
}
