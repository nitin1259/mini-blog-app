import { combineReducers } from 'redux'
import { isLoading, blogHasError, blogs } from './blog.reducers'

const reducers = combineReducers({
    isLoading,
    blogHasError,
    blogs
});

export default reducers;