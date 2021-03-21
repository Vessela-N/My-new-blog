function user(mongoose) {
    const Schema = mongoose.Schema;

    const userSchema = new Schema(
        {
            fullName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            _id: {
                type: String,
                required: true,
            },
        },
        { timestamps: true }
    );

    return mongoose.model('User', userSchema);
}

export default user;
