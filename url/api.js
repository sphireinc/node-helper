/**
 * AttachEndpointVariable replaces a variable placeholder in the URI
 * @constructor
 * @param url string
 * @param variables Object || string || number
 *
 * @example
 * // returns "/api/endpoint/endpoint/value"
 * AttachEndpointVariable('/api/endpoint/endpoint/{variable}', 'value');
 *
 * @example
 * // returns "/api/endpoint/endpoint/value/value2"
 * AttachEndpointVariable('/api/endpoint/endpoint/{variable}/{variable2}', { variable: 'value', variable2: 'value2' });
 *
 */
export const AttachEndpointVariable = (url, variables) => {
    const placeholderPattern = /\{([^}]+)\}/g;
    let variableValues = {};

    // if variables is a string, assume there's only one variable to replace
    if (typeof variables !== 'object' || variables === null) {
        variableValues[placeholderPattern.exec(url)[1]] = variables;
    } else {
        variableValues = variables;
    }

    return url.replace(placeholderPattern, (match, variableName) => {
        return variableValues[variableName] || '';
    });
}


