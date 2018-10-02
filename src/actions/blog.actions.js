export function blogHasError(bool){
    return {
        type: 'BLOG_HAS_ERROR',
        hasError: bool
    }
}

export function blogIsLoading(bool){
    return{
        type: 'BLOG_IS_LOADING',
        isLoading: bool
    }
}

export function blogFetchFromDataSource(blogs){
    return {
        type: 'BLOG_FETCH_DATA_SUCCESS',
        blogs
    }
}