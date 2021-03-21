import mongoose from 'mongoose';
import setSchemas from '../schemas';

function connection() {
    // connect to mongodb & listen for requests
    const dbURI = 'mongodb+srv://Asiya:asiya12@cluster0.7kuu1.mongodb.net/Blog';
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return setSchemas(mongoose);
}

const schemaModels = connection();

export default schemaModels;
