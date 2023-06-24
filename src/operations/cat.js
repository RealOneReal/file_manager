import fs from 'node:fs';
import path from 'node:path';
import { INVALID_INPUT } from "../helpers/constants.js";
import { PathCache } from '../helpers/pathCache.js';

export const cat = async(filePath) => {
    const readStream = fs.createReadStream(path.join(PathCache.getPath(), filePath));
    readStream.on('error', () => {
        console.log(INVALID_INPUT);
    });
    readStream.on('end', () => {
        process.stdout.write('\n');
    });
    readStream.pipe(process.stdout);
};
