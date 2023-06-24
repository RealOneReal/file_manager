import fs from 'node:fs/promises';
import path from 'node:path';
import { PathCache } from '../helpers/pathCache.js';
import { INVALID_INPUT } from '../helpers/constants.js';

export const add = async (file) => {
    const pathFile = path.join(PathCache.getPath(), file);

    try {
        await fs.writeFile(pathFile,'', { flag: 'wx' });
    } catch(e) {
        console.log(INVALID_INPUT);
    }
}