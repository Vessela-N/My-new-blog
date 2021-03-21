function auth(mongoose) {
    const Schema = mongoose.Schema;

    const authSchema = new Schema(
        {
            passHash: {
                type: String,
                required: true,
            },
            _id: {
                type: String,
                required: true,
            },
        },
        
    );

    return mongoose.model('Auth', authSchema);
}

export default auth;