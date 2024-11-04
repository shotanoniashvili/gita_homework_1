import fs from 'fs';

export function openFile(path) {
    return fs.readFileSync(path, 'utf8')
}