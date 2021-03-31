import './Navbar.css';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Navbar = () => {
    return (
        <div>
        <nav className='navbar'>
            <div className='links'>
                <Link to='/'>All recipes</Link>
                <Link to='/recipe/add'>Add your recipe</Link>
                <Link className='login-links' to='/login'>
                    Login
                </Link>
            </div>
        </nav>
        <Banner />
        </div>
    );
};

export default Navbar;
