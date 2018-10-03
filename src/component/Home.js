import React, { Component } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Mini blog Application</h1>
        <div>
          <BlogList />
          {/* <BlogForm /> */}
          {/* <BlogDetails id={2}/> */}
          
        </div>
      </div>
    );
  }
}

export default Home;
