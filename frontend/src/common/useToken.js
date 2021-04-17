import { useMemo, useState } from 'react';
import decode from 'jwt-decode';

export default function useToken() {
    const [tokenState, setTokenState] = useState({});
    const isUndefinedToken = tokenState.token === undefined;

    const tokenObject = useMemo(() => {
        if (!isUndefinedToken) return tokenState;

        const token = localStorage.getItem('token');
        const decodedTokenString = localStorage.getItem('decodedToken');
        const decodedToken = JSON.parse(decodedTokenString);

        if (token === null) return {};

        const newState = {
            token,
            decodedToken,
        };
        setTokenState(newState);
        return newState;
    }, [isUndefinedToken, tokenState]);

    const setToken = (token) => {
        if (token === undefined) {
            setTokenState({});
            localStorage.clear();
            return;
        }
        const decodedToken = decode(token);
        localStorage.setItem('token', token);
        localStorage.setItem('decodedToken', JSON.stringify(decodedToken));

        setTokenState({ token, decodedToken });
    };

    return { tokenState: tokenObject, setToken };
}
