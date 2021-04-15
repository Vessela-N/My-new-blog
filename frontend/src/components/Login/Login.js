import styles from './Login.module.css';
import FormError from '../FormError/FormError';
import { useCallback, useState } from 'react';
import useAuthAsyncActions from '../../state/asyncActions/auth';
import { validations } from '../../common/helpers';

const required = (field) => (val) => {
    if (val.length === 0) return `${field} is required!`;
    return true;
};

const validationFns = {
    userName: [required('User name')],
    password: [required('Password')],
};

const Login = ({ history }) => {
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const { login } = useAuthAsyncActions();

    const errorsForField = useCallback(
        (field) => {
            return validationErrors[field] || [];
        },
        [validationErrors]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = e.target;
        

        const errors = validations(validationFns, {userName: userName.value, password: password.value});
        // console.log({ errors });
        setValidationErrors(errors);

        Object.keys(errors).length === 0 &&
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
                <FormError errors={errorsForField('userName')} />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your password'
                />
                <FormError errors={errorsForField('password')} />
                <button>Login</button>
            </form>
            {error && <div>error</div>}
        </div>
    );
};

export default Login;
