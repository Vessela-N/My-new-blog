import { Link } from 'react-router-dom';
import cuisines from '../../common/cuisines';

const Cuisines = () => {
    return (
        <ul class='cuisines'>
            {Object.keys(cuisines).map((c) => {
                return (
                    <li>
                        <Link
                            to={`/cuisines/${c}`}
                        >{`${cuisines[c]} cuisine`}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Cuisines;
