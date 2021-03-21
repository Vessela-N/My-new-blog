import schemaModels from './connections';
import { commonSave } from './common';

const { User } = schemaModels;

export const save = commonSave(User);

export function userExist(userName) {
    return User.findById(userName, ['_id']);
}
