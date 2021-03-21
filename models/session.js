import schemaModels from './connections';
import { commonSave } from './common';

const { Session } = schemaModels;

export const save = commonSave(Session);
