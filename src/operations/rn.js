import path from 'node:path';
import fs from 'node:fs/promises';
import { PathCache, INVALID_INPUT, isExist } from '../helpers/index.js';

export const rn = async (oldName, newName) => {
    const fileOldPath = path.resolve(PathCache.getPath(), oldName);
    const fileNewPath = path.resolve(PathCache.getPath(), newName);

    if(!await isExist(fileOldPath) || await isExist(fileNewPath)) {
        console.log(INVALID_INPUT);
        return;
    }
    try {
        await fs.rename(fileOldPath, fileNewPath);
    } catch(e) {
        console.log(INVALID_INPUT);
    }   
};
