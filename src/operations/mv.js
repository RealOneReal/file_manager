import path from 'node:path';
import fs from 'node:fs';
import { rm } from 'node:fs/promises';
import { PathCache } from "../helpers/pathCache.js";
import { pipeline } from 'node:stream/promises';
import { OPERATION_FAILED } from '../helpers/constants.js';

export const mv = async(oldPath, newPath) => {
    try {
        const from = path.resolve(PathCache.getPath(), oldPath);
        const fromName = path.basename(from);
        const to = path.resolve(PathCache.getPath(), newPath, fromName);
        const readStream = fs.createReadStream(from);
        const writeStream = fs.createWriteStream(to);
        await pipeline(readStream,writeStream);
        await rm(from);
    } catch(e) {
        console.log(OPERATION_FAILED);
        console.log(e);
    }
};