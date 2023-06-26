import { up, cd, ls } from '../nwd/index.js';
import { add, cat, cp, mv, rn, osFunc, rm, hash, compress, decompress } from '../operations/index.js';
import { INVALID_INPUT } from './constants.js';
import { parseCommand } from './parseCommand.js';

export const lineParser = async (str) => {
    const { command, source = '', destination = '' } = parseCommand(str.trim());
    if(command === 'up') {
        up();
        return;
    }
    if(command === 'cd') {
        await cd(source);
        return;
    }
    if(command === 'ls') {
        await ls();
        return;
    }
    if(command === 'cat') {
        await cat(source);
        return;
    }
    if(command === 'add') {
        await add(source);
        return;
    }
    if(command === 'rn') {
        await rn(source, destination);
        return;
    }
    if(command === 'cp') {
        await cp(source, destination);
        return;
    }
    if(command === 'mv') {
        await mv(source, destination);
        return;
    }
    if(command === 'rm') {
        await rm(source);
        return;
    }
    if(command === 'os') {
        osFunc(source);
        return;
    }
    if(command === 'hash') {
        await hash(source);
        return;
    }
    if(command === 'compress') {
        await compress(source, destination);
        return;
    }
    if(command === 'decompress') {
        await decompress(source, destination);
        return;
    }

    if(str) {
        console.log(INVALID_INPUT)
    }
};
