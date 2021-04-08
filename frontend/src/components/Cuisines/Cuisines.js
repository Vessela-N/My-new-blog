import { Link } from 'react-router-dom';
import './Cuisines.css';
import cuisines from '../../common/cuisines';

const Cuisines = () => {
    return (
        <ul className='cuisines-menu'>
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
