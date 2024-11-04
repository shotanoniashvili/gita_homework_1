import { textToAscii } from './ascii-art.js'
import { openFile as openFileWithFs } from './json_fs.js';
import { openFile as openFileWithStream } from './json_stream.js';
import { openFile as openFileWithBf } from './json_buffer.js';

const text = "Hello NodeJS";

textToAscii(text).then(rendered => {
    console.log(rendered)
}).catch(err => {
    // TODO: implement error handling
});

const objWithFs = JSON.parse(openFileWithFs('./example.json'))
const objWithStream = JSON.parse(await openFileWithStream('./example.json'))
const objWithBf = JSON.parse(await openFileWithBf('./example.json'))

console.log('FS: ', objWithFs)
console.log('STREAM: ', objWithStream)
console.log('BUFFER: ', objWithBf)
