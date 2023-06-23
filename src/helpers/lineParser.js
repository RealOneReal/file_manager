import { up } from "../nwd/up.js";
import { cd } from "../nwd/cd.js";

/**
 * @param {string} str myInput
*/
export const lineParser = async (str) => {
    const input = str.trim();
    if(input.startsWith('up')) {
        up();
    }
    if(input.startsWith('cd')) {
        await cd(input.slice(3));
    }
} 