import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Middle Eastern Food Recipes</h1>
            <div className='links'>
                <Link to='/'>All recipes</Link>
                <Link to='/create'>Create recipe</Link>
            </div>
        </nav>
    );
};

export default Navbar;
