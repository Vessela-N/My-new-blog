import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='links'>
                    <Link to='/'>All recipes</Link>
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
