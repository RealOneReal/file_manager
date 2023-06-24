import fs from 'node:fs/promises';
import path from 'node:path';
import { PathCache } from '../helpers/pathCache.js';
import { OPERATION_FAILED } from '../helpers/constants.js';

export const add = async (file) => {
    const pathFile = path.join(PathCache.getPath(), file);
    try {
        await fs.writeFile(pathFile,'', { flag: 'wx' });
    } catch(e) {
        console.log(OPERATION_FAILED);
    }
}