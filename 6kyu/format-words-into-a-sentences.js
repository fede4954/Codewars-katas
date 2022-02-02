// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""


const formatWords = (words) => {
    if (!words) return ''

    const filteredWords = words.filter(word => word.length > 0)
    if (filteredWords.length === 0) return ''
    if (filteredWords.length === 1) return filteredWords[0]
    return filteredWords.slice(0, -1).join(', ') + ' and ' + filteredWords.slice(-1)
}