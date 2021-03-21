import recipe from './Recipe';
import session from './Session';
import user from './User';
import auth from './Auth';

function setSchemas(mongoose) {
    return {
        Recipe: recipe(mongoose),
        Session: session(mongoose),
        User: user(mongoose),
        Auth: auth(mongoose),
    };
}

export default setSchemas;
