import styles from './FormError.module.css';

const FormError = ({ errors = [] }) => {
    return (
        <ul className={styles.error}>
            {errors.map((e) => (
                <li key={e}>{e}</li>
            ))}
        </ul>
    );
};

export default FormError;
