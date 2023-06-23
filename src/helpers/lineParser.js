import { up, cd, ls } from '../nwd/index.js';
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
    }
    console.log(INVALID_INPUT)
};
