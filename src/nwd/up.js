import path from 'node:path';
import PathCache from '../helpers/pathCache.js';


export const up = () => {
    const currentDir = PathCache.getPath();
    const parentDir = path.resolve(currentDir, '../');
    const rootDir = path.parse(currentDir).root;
    if(rootDir !== currentDir) {
        PathCache.setPath(parentDir);
    };
}