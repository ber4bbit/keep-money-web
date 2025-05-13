/**
 * @param string Some string that needs to be formatted
 * in title format: first letter of word is capital
 * @returns Formatted to title string
 * */
export const useTitleFormat = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}