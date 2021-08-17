/** Formats a string with proper case. */
export function tCase(str) {
    return str.replace(/\w+/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
