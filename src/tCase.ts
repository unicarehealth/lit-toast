/** Formats a string as proper case. */
export function tCase(str: string): string {
    return str.replace(/\w+/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}