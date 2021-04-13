import { Link } from 'react-router-dom';
import styles from './CuisinesMenu.module.css';
import cuisines from '../../common/cuisines';


const CuisinesMenu = () => {
    return (
        <ul className={styles.cuisinesMenu}>
            {Object.keys(cuisines).map((c) => {
                return (
                    <li key={c}>
                        <Link
                            to={`/cuisines/${c}`} 
                        >{`${cuisines[c]} cuisine`}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default CuisinesMenu;
