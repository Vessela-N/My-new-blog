import styles from './DishType.module.css';
import categories from '../../common/categories';
import { Link } from 'react-router-dom';

const DishType = () => {
    const dishTypes = Object.keys(categories);

    return (
        <div className={styles.dropdown}>
            <span className={styles.dropbtn}>Dish Type</span>
            <div className={styles.dropdownContent}>
                {dishTypes.map((c) => (
                    <Link to={`/categories/${c}`} className={styles.links} key={c}>{categories[c]}</Link>
                ))}
            </div>
        </div>
    );
};

export default DishType;
