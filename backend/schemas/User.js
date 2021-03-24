import { isEmail } from 'validator';

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
                required: [true, 'Please enter an email!'],
                unique: true,
                lowercase: true,
                validate: [isEmail, 'Please enter a valid email!']
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
