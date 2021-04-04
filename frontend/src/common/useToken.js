export default function useToken() {
    const token = localStorage.getItem('token');
    const decodedTokenString = localStorage.getItem('decodedToken');
    const decodedToken = JSON.parse(decodedTokenString);

    return decodedTokenString ? { token, decodedToken } : {};
}
