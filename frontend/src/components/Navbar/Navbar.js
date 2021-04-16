import styles from'./Navbar.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { StateContext } from '../../state/context';
import DishType from '../DishType/DishType';

const Navbar = () => {
    const { tokenState, setToken } = useContext(StateContext);

    const history = useHistory();
    const handleLogout = (e) => {
        e.preventDefault();
        setToken();
        history.push('/');
    };

    return (
        <div className={styles.headerNavbar}>
            <nav className={styles.navbar}>
                    <Link to='/' className={styles.logo}>
                        <h1>Middle Eastern Food Recipes</h1>
                    </Link>
                <div className={styles.links}>
                <Link to='/'>All recipes</Link>
                <DishType />
                <Link to='/recipe/add'>Add your recipe</Link>
                    {tokenState.token ? (
                        <Link onClick={handleLogout} to='/'>
                            Logout
                        </Link>
                    ) : (
                        <>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
