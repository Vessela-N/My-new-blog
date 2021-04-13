import decode from 'jwt-decode';
import styles from './Login.module.css';

const Login = ({ history }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = e.target;

        fetch('http://localhost:3001/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: userName.value,
                password: password.value,
            }),
        })
            .then((result) => result.json())
            .then((result) => {
                const decodedToken = decode(result.token);
                localStorage.setItem('token', result.token);
                localStorage.setItem(
                    'decodedToken',
                    JSON.stringify(decodedToken)
                );
                history.push('/');
            });
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
        </div>
    );
};

export default Login;
