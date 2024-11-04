import fs from 'node:fs';


export function openFile(path) {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(path);

        let data = '';

        stream.on('error', (err) => {
            reject(err)
        });

        stream.on('data', (chunk) => {
            data += chunk
        });

        stream.on('end', () => {
            resolve(data);
        });
    })

}
