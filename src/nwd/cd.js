import path from 'node:path';
import fs from 'node:fs/promises';
import { INVALID_INPUT, isExist, PathCache } from '../helpers/index.js';

export const cd = async (input) => {
    let absolutePath = path.resolve(PathCache.getPath(), input);
    try {
        if((await fs.stat(absolutePath)).isFile()) {
            absolutePath = path.dirname(absolutePath);
        }
        const isPathExist = await isExist(absolutePath);
        if(isPathExist) {
            PathCache.setPath(absolutePath);
        } else {
            console.log(INVALID_INPUT);
        }
    } catch(e) {
        console.log(INVALID_INPUT);
    }
};