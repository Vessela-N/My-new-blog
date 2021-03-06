function recipe(mongoose) {
    const Schema = mongoose.Schema;

    const recipeSchema = new Schema(
        {
            title: {
                type: String,
                required: true,
            },
            servings: {
                type: Number,
                required: true,
            },
            description: {
                type: String,
            },
            ingredients: {
                type: Array,
                required: true,
            },
            directions: {
                type: Array,
                required: true,
            },
            category: {
                type: String,
                required: true,
            },
            cuisine: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
                validate: /^http?/,
            },
            userName: {
                type: String,
                required: true,
            },
            flag: {
                type: String,
            },
        },
        { timestamps: true }
    );

    return mongoose.model('Recipe', recipeSchema);
}

export default recipe;
