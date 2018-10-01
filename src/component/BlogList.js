import React, { Component } from 'react'
import blogData from '../api/data'
import { limitedName } from '../blog.config/blog.utils';


export default class BlogList extends Component {

    showBlogList() {
        const data = blogData;
        console.log(data)
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

    render() {
        return (
            <div>
                {this.showBlogList()}
            </div>  

        )
    }
}