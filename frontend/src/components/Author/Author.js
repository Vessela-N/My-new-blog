import styles from './Author.module.css';

const Author = ({ userName }) => {
    return (
        <p className={styles.author}>
            {'Recipe by  '}
            <span className={styles.userName}>{userName}</span>
        </p>
    );
};

export default Author;
