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
const PathCache = new PathCacheSingleton();

export default PathCache;