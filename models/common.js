export const commonSave = (Model) => (data) => {
    const entity = new Model(data);
    return entity.save();
}