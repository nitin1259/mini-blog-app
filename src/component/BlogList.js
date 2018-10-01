import React, { Component } from 'react'
import blogData from '../api/data'
import { limitedName } from '../blog.config/blog.utils';
import { getRequest } from '../api/api.request';


export default class BlogList extends Component {
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
        console.log(typeof blogList);
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

        this.setState({ isLoading: false, blogData: blogFormatedData })
    }

    render() {
        const data = this.state.blogData;
        if (this.state.isLoading) {
            return (<div>Loading...</div>)
        }
        if (this.state.hasError) {
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