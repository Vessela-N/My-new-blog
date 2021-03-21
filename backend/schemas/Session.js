function session(mongoose) {
    const Schema = mongoose.Schema;

    const sessionSchema = new Schema({
        userName: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            expires: '1h',
            default: Date.now,
        },
    });

    return mongoose.model('Session', sessionSchema);
}

export default session;
