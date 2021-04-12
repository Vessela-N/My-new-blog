import './Navbar.css';
import { Link,  useHistory } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({isLoggedIn}) => {
   const [loggedIn, setLoggedIn] = useState(isLoggedIn);

    console.log({isLoggedIn, loggedIn});
    const history = useHistory();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        setLoggedIn(false);
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
                    <Link to=''>Dish type</Link>
                    <Link to='/recipe/add'>Add your recipe</Link>
                    {loggedIn ? (
                        <Link onClick={handleLogout}>Logout</Link>
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
