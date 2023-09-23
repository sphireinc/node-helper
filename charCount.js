/**
 * Checks if the length of text is less than limit and populates the body of elem element with text if it exceeds the limit.
 *
 * @param {string} text - The input text to check.
 * @param {number} limit - The character limit.
 * @param {HTMLElement} elem - The DOM element where text will be populated if it exceeds the limit.
 * @param {string} errorMsg
 */
export const charCount = (text = "", limit = 50, elem = null, errorMsg = "") => {
    if (text.length >= limit) {
        elem.textContent = errorMsg;
    }
}