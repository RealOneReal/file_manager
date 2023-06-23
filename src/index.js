import readline from 'node:readline/promises';
import { parseUsername } from './helpers/parseUsername.js';
import PathCache from './helpers/pathCache.js';
import { lineParser } from './helpers/lineParser.js';


const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const username = parseUsername();

console.log(`Welcome to the File Manager, ${username}`);
console.log(`You are currently in ${PathCache.getPath()}`)
rl.on('close',() => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
});

rl.on('line', async (input) => {
    await lineParser(input);
    console.log(`You are currently in ${PathCache.getPath()}`)
});