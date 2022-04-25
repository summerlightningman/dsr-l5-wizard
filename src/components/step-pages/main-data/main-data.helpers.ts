export const replaceRight = (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string) => replaceValue
    .split('').reverse().join('')
    .replace(searchValue, '_')
    .split('').reverse().join('');