import art from 'ascii-art'

export function textToAscii(text, font = 'doom') {
    return art.font(text, font)
}