import schemaModels from './connections';
import { commonSave } from './common';

const { Recipe } = schemaModels;

export const save = commonSave(Recipe);

export function load() {
    return Recipe.find(); //{}, ['title', 'createdAt']
}

export function loadById(id) {
    return Recipe.findById(id);
}

export function loadByFilters(filters) {
    return Recipe.find(filters);
}
