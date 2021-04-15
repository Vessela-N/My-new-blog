import schemaModels from './connections';
import { commonSave } from './common';

const { Recipe } = schemaModels;

export const add = commonSave(Recipe);

export const edit = r => Recipe.updateOne({_id: r._id}, r)

export const del = id => Recipe.deleteOne({_id: id})

export function load() {
    return Recipe.find(); //{}, ['title', 'createdAt']
}

export function loadById(id) {
    return Recipe.findById(id);
}

export function loadByFilters(filters) {
    return Recipe.find(filters);
}
