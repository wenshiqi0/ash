export function stringToUtf8ArrayBuffer(str: string): ArrayBuffer {
    return new TextEncoder().encode(str);
}