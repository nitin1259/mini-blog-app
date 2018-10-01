export const limitedName = (input, len = 25) => {
    if (input.length > len) {
        return input.substr(0, len) + '...'
    }
    return input
}