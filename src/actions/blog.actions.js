import { getRequest } from "../api/api.request";

export function blogHasError(bool) {
    return {
        type: 'BLOG_HAS_ERROR',
        hasError: bool
    }
}

export function blogIsLoading(bool) {
    return {
        type: 'BLOG_IS_LOADING',
        isLoading: bool
    }
}

export function blogFetchData(blogs) {
    return {
        type: 'BLOG_FETCH_DATA_SUCCESS',
        blogs
    }
}

export function blogFetchFromDataSource(url) {
    return (dispatch) => {
        dispatch(blogIsLoading(true));

        getRequest(url)
            .then(res => {
                dispatch(blogIsLoading(false)); return res;
            })
            .then(blogs => {
                const blogFormatedData = blogs.map(el => {
                    return {
                        id: el.id,
                        title: el.title,
                        author: 'martin luther',
                        content: el.body
                    }
                })
                dispatch(blogFetchData(blogFormatedData))
            })
            .catch(() => {
                dispatch(blogHasError(true))
            })
    }
}