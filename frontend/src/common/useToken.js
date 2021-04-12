import { useState } from "react";

export default function useToken() {
    const token = localStorage.getItem('token');
    const decodedTokenString = localStorage.getItem('decodedToken');

    const [loggedIn, setLoggedIn] = useState(Boolean(token));
    
    const decodedToken = JSON.parse(decodedTokenString);

    return decodedTokenString ? { token, decodedToken } : {};
}
