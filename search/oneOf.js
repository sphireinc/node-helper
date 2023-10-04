export const oneOf = (...args) => {
    let found = args.find(arg => arg !== null && arg !== undefined && arg !== '');
    if(found === undefined) {
        found = "";
    }
    return found;
}