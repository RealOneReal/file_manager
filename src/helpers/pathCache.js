import { homedir } from 'node:os';

class PathCacheSingleton {
    constructor() {
        this._path = homedir();
    }
    setPath(newPath) {
        this._path = newPath;
    }
    getPath() {
        return this._path;
    }
};
export const PathCache = new PathCacheSingleton();
