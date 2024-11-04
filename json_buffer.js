import { openSync, readSync, closeSync } from "node:fs";

export function openFile(path, bufferSize = 2048) {
    const fd = openSync(path, 'r');
    const buffer = Buffer.alloc(1024);
    let content = '';

    try {
        let bytesRead = 1;

        while (bytesRead > 0) {
            bytesRead = readSync(fd, buffer, 0, buffer.length, null);
            content += buffer.toString('utf8', 0, bytesRead);
        }

        return content;
    } catch (error) {
        throw error;
    } finally {
        closeSync(fd);
    }
}