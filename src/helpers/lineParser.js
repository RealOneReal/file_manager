import { up, cd, ls } from '../nwd/index.js';
import { add, cat, cp, mv, rn } from '../operations/index.js';
import { INVALID_INPUT } from './constants.js';
/**
 * @param {string} str myInput
*/
export const lineParser = async (str) => {
    const input = str.trim();
    if(input.startsWith('up')) {
        up();
        return;
    }
    if(input.startsWith('cd')) {
        await cd(input.slice(3));
        return;
    }
    if(input.startsWith('ls')) {
        await ls();
        return;
    }
    if(input.startsWith('cat')) {
        await cat(input.slice(4));
        return;
    }
    if(input.startsWith('add')) {
        await add(input.slice(4));
        return;
    }
    if(input.startsWith('rn')) {
        const space = input.indexOf(' ', 3);
        const fileOld = input.slice(3,space);
        const fileNew = input.slice(space + 1);
       
        await rn(fileOld, fileNew);
        return;
    }

    if(input.startsWith('cp')) {
        const space = input.indexOf(' ', 3);
        const fileOld = input.slice(3,space);
        const fileNew = input.slice(space + 1);
       
        await cp(fileOld, fileNew);
        return;
    }

    if(input.startsWith('mv')) {
        const space = input.indexOf(' ', 3);
        const fileOld = input.slice(3,space);
        const fileNew = input.slice(space + 1);
       
        await mv(fileOld, fileNew);
        return;
    }






    if(str) {
        console.log(INVALID_INPUT)
        return;
    }
};
