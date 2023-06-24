import path from 'node:path';
import { PathCache, OPERATION_FAILED } from '../helpers/index.js';
import { pipeline } from 'node:stream/promises'
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';

export const decompress = async(input, output) => {
    try {
        const filePath = path.resolve(PathCache.getPath(), input);
        const fileName = path.parse(filePath).name;
        const destinationPath = path.resolve(PathCache.getPath(), output, fileName);
        await pipeline(createReadStream(filePath), createBrotliDecompress(), createWriteStream(destinationPath));
    
     }catch(e) {
        console.log(OPERATION_FAILED);
     }
};
