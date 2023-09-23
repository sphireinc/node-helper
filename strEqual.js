export const strEqual = (str1, str2, trim = false) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false;
    }

    if (str1 === undefined || str2 === undefined) {
        return false;
    }

    if(trim) {
        return str1.trim().toLowerCase() === str2.trim().toLowerCase();
    }

    return str1.toLowerCase() === str2.toLowerCase();
}