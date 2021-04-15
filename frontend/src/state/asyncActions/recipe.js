import {
    success,
    request,
    failure,
    update,
    delAction,
    insert,
} from '../actions/creators';
import { StateContext } from '../context';
import { useCallback, useContext } from 'react';
import useService from '../../api/useService';

const useRecipeAsyncActions = () => {
    const { dispatchRecipe: dispatch } = useContext(StateContext);
    const {
        getRecipes,
        addRecipe: insertRecipe,
        deleteRecipe,
        editRecipe,
    } = useService();

    const loadRecipes = useCallback(() => {
        dispatch(request());

        return (
            getRecipes()
                // .then((recipes) => setRecipes({
                // 	isPending: false,
                // 	error: '',
                // 	recipes
                // }))
                .then((recipes) => dispatch(success(recipes)))
                .catch((error) => dispatch(failure(error.message)))
        );
    }, [dispatch]);

    const modifyRecipe = (fn, action) => (recipe) => {
        dispatch(request());

        return fn(recipe)
            .then((res) => {
                if (res.status === 'error') {
                    dispatch(failure(res.message));
                    return res;
                }

                dispatch(action(recipe));

                return res;
            })
            .catch((error) => dispatch(failure(error.message)));
    };
    const addRecipe = modifyRecipe(insertRecipe, insert);
    const updateRecipe = modifyRecipe(editRecipe, update);
    const removeRecipe = modifyRecipe(deleteRecipe, delAction);

    // const removeRecipe = id => {
    // 	dispatch(request())
    //
    // 	return deleteRecipe(id)
    // 		.then(res => {
    // 			if (res.status === 'error') {
    // 				dispatch(failure(res.message))
    // 				return res
    // 			}
    //
    // 			dispatch(delAction(id))
    //
    // 			return res
    // 		})
    // 		.catch(error => dispatch(failure(error.message)))
    // }

    return {
        loadRecipes,
        addRecipe,
        updateRecipe,
        removeRecipe,
    };
};

export default useRecipeAsyncActions;
