import React, { Component } from 'react'
import { limitedName, blogApis } from '../blog.config/blog.utils';
import { getRequest } from '../api/api.request';
import { connect } from 'react-redux';
import { blogFetchFromDataSource } from '../actions/blog.actions'
import BlogDetails from './BlogDetails';
import { Link } from 'react-router-dom'


class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            hasError: false
        }
        this.showBlogDetails = this.showBlogDetails.bind(this)
    }

    componentDidMount() {
        const url = blogApis.getAllBlogs;
        this.props.fetchData(url);
    }

    showBlogDetails(event) {
        console.log(event.target.key)
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
            <div>
                <Link to="/blogs/addNew"><input type="submit" value="Add New" className="input-blog-view" /></Link>
                <br />
                <ul>
                    {data.map((blog, i) => {
                        return (
                            <Link to={'/blogs/' + blog.id} key={i}>
                                <li key={blog.id} style={{ cursor: 'pointer' }}>
                                    <div className="blogListElement">
                                        <div>
                                            <span className="blogTitle">{limitedName(blog.title)}</span>
                                            <span className="blogAuthor"> by {blog.author}</span>
                                            <span className="blogContent">| {limitedName(blog.content, 100)}</span>
                                        </div>

                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
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
        fetchData: (url) => dispatch(blogFetchFromDataSource(url))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);