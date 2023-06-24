import path from 'node:path';
import fs from 'node:fs/promises';
import { PathCache } from '../helpers/pathCache.js';
import { INVALID_INPUT } from '../helpers/constants.js';

export const rm = async (file) => {
    const filePath = path.resolve(PathCache.getPath(), file);
    try {
        await fs.rm(filePath);
    } catch(e) {
        console.log(INVALID_INPUT);
    }
}