import React, { Component } from 'react'
import { connect } from 'react-redux';
import { blogApis } from '../blog.config/blog.utils';
import { blogFetchAfterSave } from '../actions/blog.actions';
import { postRequest } from '../api/api.request';

class BlogForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author:'',
            content: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveBlogDetails = this.saveBlogDetails.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    async saveBlogDetails(){
        if(this.state.title && this.state.author && this.state.content){
            const url = blogApis.getAllBlogs
            await postRequest(url,  
                {
                    title: this.state.title,
                    author: this.state.author,
                    content: this.state.content
                }).then(res => {
                    console.log(res);
                    alert("Data save successfully with id: " + res.id)         
                }).catch(err =>{
                    console.log(err);
                })
        }else{
            alert("Both fields are mandatory !!!")
        }
    }

    render() {

        return (
            <div className="blog-form-div">
                <label>Title :</label>
                <div>
                    <input className="input-details" type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Article Title" />
                </div>
                <label>Author :</label>
                <div>
                    <input className="input-details" type="text" name="author" value={this.state.author} onChange={this.handleChange} placeholder="Author Name" />
                </div>
                <label>Content :</label>
                <div>
                    <textarea className="input-details textArea-height" value={this.state.content} name="content" placeholder="Article Description" onChange={this.handleChange} /></div>

                <div style={{ width: '75%' }}><button className="btn-blog-submit" onClick={this.saveBlogDetails} >Save</button></div>

            </div>
        )
    };
}

// const mapStateToProps = (state) => {
//     return {
//         blogList: state.blogs
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         saveData: (url, blogdetails) => dispatch(blogFetchAfterSave(url, blogdetails))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);
export default BlogForm