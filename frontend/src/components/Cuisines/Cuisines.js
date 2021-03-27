import { Link } from 'react-router-dom';

const Cuisine = () => {
    return (
        <div class='cuisines'>
            <Link to='/cuisine/arab'>Arab cuisine</Link>
            <Link to='/cuisine/armenian'>Armenian cuisine</Link>
            <Link to='/cuisine/azerbaijani'>Azerbaijani cuisine</Link>
            <Link to='/cuisine/assyrian'>Assyrian cuisine</Link>
        </div>
    );
};

export default Cuisine;
