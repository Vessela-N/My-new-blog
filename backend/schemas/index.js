import recipe from './Recipe';
import user from './User';
import auth from './Auth';

function setSchemas(mongoose) {
    return {
        Recipe: recipe(mongoose),
        User: user(mongoose),
        Auth: auth(mongoose),
    };
}

export default setSchemas;
