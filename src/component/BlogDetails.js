import React, { Component } from 'react'
import { getRequest } from '../api/api.request';
import { blogApis } from '../blog.config/blog.utils';
import { Link } from 'react-router-dom'


class BlogDetails extends Component {
    constructor(props){
        super(props)
        this.id = this.props.params.id
        this.state={
            blog:''
        }

        this.fetchBlogDetails = this.fetchBlogDetails.bind(this)
    }

    componentDidMount() {
        const url = `${blogApis.getAllBlogs}/${this.id}`
        this.fetchBlogDetails(url);
        
    }
    async fetchBlogDetails(url){
        const blog = await getRequest(url).then(res => res);
        console.log(blog);
        this.setState({blog})
    }
    render() {
        if(this.state.blog){
        return (
            
            <div className="blog-form-div">

                <div>
                    {this.state.blog.content}
                </div>
                <div>
                <Link to={'/blog/edit/' + this.id}><input type="submit" value="Edit" className="input-blog-view" /></Link>
                </div>
            </div>
        )}
        return(
            <div> Loading...</div>
        )
    }
}

export default BlogDetails