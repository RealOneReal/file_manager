import path from 'node:path';
import { PathCache } from '../helpers/pathCache.js';
import { pipeline } from 'node:stream/promises'
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { OPERATION_FAILED } from '../helpers/constants.js';

export const compress = async(input, output) => {
 try {
    const filePath = path.resolve(PathCache.getPath(), input);
    const fileName = path.basename(filePath) + '.br';
    const destinationPath = path.resolve(PathCache.getPath(), output, fileName);
    console.log(destinationPath);
    await pipeline(createReadStream(filePath), createBrotliCompress(), createWriteStream(destinationPath));

 } catch(e) {
    console.log(OPERATION_FAILED);
 }
};
