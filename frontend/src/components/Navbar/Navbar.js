import './Navbar.css';
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
        <div className='header-navbar'>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'>
                        <h1>Middle Eastern Food Recipes</h1>
                    </Link>
                </div>
                <div className='links'>
                    <Link to='/'>All recipes</Link>
                    <Link to='/dish'>Dish type</Link>
                    <DishType />
                    <Link to='/recipe/add'>Add your recipe</Link>
                    {tokenState.token ? (
                        <Link onClick={handleLogout} to='/'>
                            Logout
                        </Link>
                    ) : (
                        <>
                            <Link to='/register'>Register</Link>
                            <Link className='login-links' to='/login'>
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
