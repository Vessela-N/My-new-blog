const editState = (oldState) => (changes) => ({ ...oldState, ...changes });

const validationsByField = (errorFns) => (field, val, all) => {
    const fns = errorFns[field] || []; //->array of fns ot this field - for every validation fn -> error or true;
    return fns.map((f) => f(val, all)).filter((e) => e !== true); // to find errors -> array with errors or []
};

const validations = (errorFns, all) => {
    const validationFns = validationsByField(errorFns); 

    return Object.keys(all).reduce((acc, key) => {
        const errors = validationFns(key, all[key], all); //-> array with errors
        return errors.length === 0 ? acc : { ...acc, [key]: errors }; 
    }, {}); // object -> {email: ["invalid email"]}
};

export { editState, validations };
