import { StateContext } from '../../state/context';
import { useReducer, useMemo } from 'react';
import recipeReducer from '../../state/reducers/recipe';
import useToken from '../../common/useToken';

const initRecipe = {
    isPending: false,
    error: '',
    recipes: [],
};
const ContextProvider = ({ children }) => {
    const [recipe, dispatchRecipe] = useReducer(recipeReducer, initRecipe);
    const { tokenState, setToken } = useToken();

    const value = useMemo(
        () => ({
            recipe,
            dispatchRecipe,
            tokenState,
            setToken,
        }),
        [recipe, tokenState]
    );

    return (
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    );
};

export default ContextProvider;