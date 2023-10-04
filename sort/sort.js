const getNestedValue = (obj, key) => {
    return key.split('.').reduce((acc, key) => (acc ? acc[key] : null), obj);
}

/**
 * A general sorter for arrays of objects based on a given keys value.
 *
 * To use, define a state setter/getter for the sort direction, call the Sorter with
 * `key`, `data`, and `sortDirection` - then update the sortDirection as shown.
 *
 * @param key
 * @param data
 * @param sortDirection
 * @returns {*}
 * @constructor
 * @usage
 *     const [direction, setDirection] = useState(1);
 *     Sorter(key, dataToSort, direction);
 *     setDirection(direction * -1)
 */
export const Sorter = (key, data, sortDirection) => {
    return data.sort((a, b) => {
        const valA = getNestedValue(a, key);
        const valB = getNestedValue(b, key);

        if (typeof valA === 'number' && typeof valB === 'number') {
            return (valA - valB) * sortDirection;
        }
        return String(valA).localeCompare(String(valB)) * sortDirection;
    });
}

