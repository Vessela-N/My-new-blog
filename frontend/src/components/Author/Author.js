import styles from './Author.module.css';
import { Link } from 'react-router-dom';

const Author = ({ userName }) => {
    return (
        <p className={styles.author}>
            {'Recipe by  '}
            <Link to={`/users/${userName}`}><span className={styles.userName}>{userName}</span></Link>
        </p>
    );
};

export default Author;
