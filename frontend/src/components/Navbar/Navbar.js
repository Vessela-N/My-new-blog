import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='links'>
                <Link to='/'>All recipes</Link>
                <Link to='/add'>Add your recipe</Link>
                <Link className='login-links' to='/login'>
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
