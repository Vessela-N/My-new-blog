import { Link } from 'react-router-dom';
import styles from './CuisinesMenu.module.css';
import cuisines from '../../common/cuisines';


const Cuisines = () => {
    return (
        <ul className={styles.cuisinesMenu}>
            {Object.keys(cuisines).map((c) => {
                return (
                    <li>
                        <Link
                            to={`/cuisines/${c}`} key={c}
                        >{`${cuisines[c]} cuisine`}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Cuisines;
