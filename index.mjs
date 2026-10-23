import {readFile} from 'node:fs/promises';
export async function scenarios(){return JSON.parse(await readFile(new URL('./scenarios.json',import.meta.url),'utf8'));}
