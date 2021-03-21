import schemaModels from './connections';
import { commonSave } from './common';

const { Auth } = schemaModels;

export const save = commonSave(Auth);

export function getById(userName) {
    return Auth.findById(userName);
}
