import mongoose from 'mongoose';
import setSchemas from '../schemas';

function connection() {
    // connect to mongodb & listen for requests
    const password = process.env.MONGO_PASSWORD;
    //console.log({password});

    const dbURI = `mongodb+srv://Asiya:${password}@cluster0.7kuu1.mongodb.net/Blog`;
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return setSchemas(mongoose);
}

const schemaModels = connection();

export default schemaModels;
