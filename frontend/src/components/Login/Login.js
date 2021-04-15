import styles from './Login.module.css';
import { useState } from 'react';
import useAuthAsyncActions from '../../state/asyncActions/auth';

const Login = ({ history }) => {
    const [error, setError] = useState('');
    const { login } = useAuthAsyncActions();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = e.target;

        login(userName.value, password.value)
            .then(() => history.push('/'))
            .catch((err) => setError(err.message));
    };

    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='userName'>User</label>
                <input
                    type='text'
                    id='userName'
                    name='userName'
                    placeholder='Your username'
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your password'
                />
                <button>Login</button>
            </form>
            {error && <div>error</div>}
        </div>
    );
};

export default Login;
