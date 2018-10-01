import React, { Component } from 'react'


export default class BlogForm extends Component {

    render() {

        return (
            <div className="blog-form-div">
                <input className="form-control my-3" placeholder="Article Title" />
                <textarea className="form-control my-3" placeholder="Article Description">
                </textarea>
                <input className="form-control my-3" placeholder="Article Author" />
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        )
    };
}