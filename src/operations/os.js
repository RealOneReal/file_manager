import os from 'node:os';
import { INVALID_INPUT } from "../helpers/constants.js";
import { PathCache } from '../helpers/pathCache.js';

export const osFunc = (input) => {
    const isFlag = input.startsWith('--');
    if(!isFlag) {
        console.log(INVALID_INPUT);
        return
    }
    const flag = input.slice(2);
    switch (input.slice(2)) {
        case 'EOL':
            console.log(os.EOL)
            break;
        case 'cpus':
            console.log( os.cpus())
            break;
        case 'homedir':
            console.log(os.homedir())
        break;

        case 'username':
        console.log(PathCache.getUserName())
        break;

        case 'architecture':
        console.log(os.arch());
        break;

        default:
        console.log(INVALID_INPUT);
            return;
    }
};