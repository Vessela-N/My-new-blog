import './Navbar.css';
import { Link } from 'react-router-dom';
import categories from '../../common/categories';

const Navbar = () => {
    return (
        <div className='header-navbar'>
            <header>
                <Link to='/'>
                    <h1>Middle Eastern Food Recipes</h1>
                </Link>
            </header>
            <nav className='navbar'>
                <div className='links'>
                    <Link to='/'>All recipes</Link>
                    <Link to=''>Dish type</Link>
                    <Link to='/recipe/add'>Add your recipe</Link>
                    <Link to='/register'>Register</Link>
                    <Link className='login-links' to='/login'>
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
