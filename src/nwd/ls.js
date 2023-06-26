import fs from 'node:fs/promises';
import { PathCache } from '../helpers/index.js';

export const ls = async () => {
    const currentDir = PathCache.getPath();
    const content = await fs.readdir(currentDir, { withFileTypes: true});

    const dirs = content.filter(item => item.isDirectory())
        .sort((a,b) => a.name.localeCompare(b.name))
        .map(item => ({ name: item.name, type: 'directory'}));
    const files = content.filter(item => item.isFile())
        .sort((a,b) => a.name.localeCompare(b.name))
        .map(item => ({ name: item.name, type: 'file'}));
    
    console.table([...dirs, ...files]);
};
