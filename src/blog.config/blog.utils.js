export const limitedName = (input, len = 25) => {
    if (input.length > len) {
        return input.substr(0, len) + '...'
    }
    return input
}


export const blogApis = {
    getAllBlogs: 'https://my-json-server.typicode.com/nitin1259/mockingBlogs/blogs',
}