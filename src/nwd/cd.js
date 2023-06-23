import path from 'node:path';
import { isExist, PathCache } from '../helpers/index.js';
/**
 * @param {string} input myInput
*/
export const cd = async (input) => {
    let absolutePath = path.resolve(PathCache.getPath(), input);
    if(path.basename(absolutePath).includes('.')) {
        absolutePath = path.dirname(absolutePath);
    }
    const isPathExist = await isExist(absolutePath);
    if(isPathExist) {
        PathCache.setPath(absolutePath);
    }
};