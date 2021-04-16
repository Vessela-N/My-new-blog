import FormError from '../FormError/FormError';
import styles from './Register.module.css';
import { useCallback, useState } from 'react';
import useAuthAsyncActions from '../../state/asyncActions/auth';
import { validations } from '../../common/helpers';
import validator from 'validator';

const confirm = (val, all) => {
    if (val.length === 0) return 'This field is required!';
    if (all.password !== all.confirm)
        return 'Both passwords should be the same!';

    return true;
};
const required = (field) => (val) => {
    if (val.length === 0) return `${field} is required!`;
    return true;
};

const validationFns = {
    fullName: [required('Full name')],
    userName: [
        (val) =>
            validator.isAlphanumeric(val) ||
            'User name should be alphanumeric!',
    ],
    email: [(val) => validator.isEmail(val) || 'Invalid email!'],
    password: [
        (val) => val.length >= 6 || 'This password is not strong enough!',
    ],
    confirm: [confirm],
};

const Register = ({ history }) => {
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const { register } = useAuthAsyncActions();

    const errorsForField = useCallback(
        (field) => {
            return validationErrors[field] || [];
        },
        [validationErrors]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, userName, password, confirm } = e.target;

        const userInfo = {
            fullName: fullName.value,
            email: email.value,
            userName: userName.value,
            password: password.value,
            confirm: confirm.value,
        };

        const errors = validations(validationFns, userInfo);
        console.log({ errors });
        setValidationErrors(errors);

        Object.keys(errors).length === 0 &&
            register(userInfo)
                .then(() => history.push('/login'))
                .catch((err) => setError(err.message));
    };

    return (
        <div className={styles.register}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fullName'>Full Name</label>
                <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    placeholder='Full name'
                />
                <FormError errors={errorsForField('fullName')} />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                />
                <FormError errors={errorsForField('email')} />
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
                <label htmlFor='confirm'>Confirm Password</label>
                <input
                    type='password'
                    id='confirm'
                    name='confirm'
                    placeholder='Confirm password'
                />
                <FormError errors={errorsForField('confirm')} />
                <button>Register</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
};

export default Register;
