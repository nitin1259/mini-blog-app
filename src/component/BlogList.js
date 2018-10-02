import React, { Component } from 'react'
import blogData from '../api/data'
import { limitedName } from '../blog.config/blog.utils';
import { getRequest } from '../api/api.request';
import { connect } from 'react-redux';
import { blogFetchFromDataSource } from '../actions/blog.actions'


class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            hasError: false
        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        this.fetchData(url);
    }

    async fetchData(url) {
        const blogList = await getRequest(url).then(response => {
            return response
        })
        this.formatData(blogList);
    }

    formatData(blogList) {
        const blogFormatedData = blogList.map(el => {
            return {
                id: el.id,
                title: el.title,
                author: 'martin luther',
                content: el.body
            }
        })

        // this.setState({ isLoading: false, blogData: blogFormatedData })
        this.props.blogFetchFromDataSource(blogFormatedData)
    }

    render() {
        const data = this.props.blogList;
        if (this.props.isLoading) {
            return (<div>Loading...</div>)
        }
        if (this.props.hasError) {
            return (<div>Sorry ! there is an error while loading data..</div>)
        }
        return (
            <ul>
                {data.map((blog) => {
                    return (
                        <li key={blog.id}>
                            <div className="blogListElement">
                                <div>
                                    <span className="blogTitle">{limitedName(blog.title)}</span>
                                    <span className="blogAuthor"> by {blog.author}</span>
                                    <span className="blogContent">| {limitedName(blog.content, 100)}</span>
                                </div>

                            </div>
                        </li>
                    )
                })}
            </ul>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        hasError: state.blogHasError,
        blogList: state.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        blogFetchFromDataSource: (url) => dispatch(blogFetchFromDataSource(url))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);