import fs from 'node:fs/promises'

export const isExist = async (path) => {
    try {
        await fs.access(path, fs.constants.F_OK);
        return true;
    } catch(e) {
        console.log('Operation failed');
        return false;
    }
};