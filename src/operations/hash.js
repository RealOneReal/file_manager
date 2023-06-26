import path from 'node:path';
import fs from 'node:fs/promises';
import { PathCache } from '../helpers/pathCache.js';
import { createHash } from 'node:crypto';
import { OPERATION_FAILED } from '../helpers/constants.js';

export const hash = async (input) => {
    try {
        const filePath = path.resolve(PathCache.getPath(), input);
        const file = await fs.readFile(filePath);
        const hash = createHash('sha256').update(file);
        const hexHash = hash.digest('hex');
        console.log(hexHash);
    } catch(e) {
        console.log(OPERATION_FAILED);
    }
}