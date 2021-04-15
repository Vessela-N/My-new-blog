const editState = (oldState) => (changes) => ({ ...oldState, ...changes });

const validationsByField = (errorFns) => (field, val, all) => {
    const fns = errorFns[field] || [];
    return fns.map((f) => f(val, all)).filter((e) => e !== true);
};

const validations = (errorFns, all) => {
    const validationFns = validationsByField(errorFns);

    return Object.keys(all).reduce((acc, k) => {
        const errors = validationFns(k, all[k], all);
        return errors.length === 0 ? acc : { ...acc, [k]: errors };
    }, {});
};

export { editState, validations };
