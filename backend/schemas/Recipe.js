function recipe(mongoose) {
    const Schema = mongoose.Schema;

    const recipeSchema = new Schema(
        {
            title: {
                type: String,
                required: true,
            },
            snippet: {
                type: String,
                required: true,
            },
            body: {
                type: String,
                required: true,
            },
        },
        { timestamps: true }
    );

    return mongoose.model('Recipe', recipeSchema);
}

export default recipe;