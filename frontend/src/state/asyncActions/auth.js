import { useContext } from 'react';
import { StateContext } from '../context';
import useService from '../../api/useService';

const useAuthAsyncActions = () => {
    const { setToken } = useContext(StateContext);

    const { login: loginService, register: registerService } = useService();

    const login = (userName, password) => {
        return loginService(userName, password).then((res) => {
            console.log({ res });
            setToken(res.token);
        });
    };

    const register = (userInfo) => {
        return registerService(userInfo).then((res) => {
            console.log({ res });
        });
    };
    return {
        login,
        register,
    };
};
export default useAuthAsyncActions;
