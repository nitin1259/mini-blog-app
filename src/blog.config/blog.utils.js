export const limitedName = (input, len = 35) => {
    if (input.length > len) {
        return input.substr(0, len) + '...'
    }
    return input
}