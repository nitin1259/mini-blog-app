export const blogHasError = (state = false, action) => {
    switch (action.type) {
        case 'BLOG_HAS_ERROR':
            return action.hasError
        default:
            return state
    }
}


export const isLoading = (state = false, action) => {
    switch (action.type) {
        case 'BLOG_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export const blogs = (state = [], action) => {
    switch (action.type) {
        case 'BLOG_FETCH_DATA_SUCCESS':
            return action.blogs
        default:
            return state
    }
}