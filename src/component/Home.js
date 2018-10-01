import React, { Component } from 'react';
import './Home.css';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Mini blog Application</h1>
        <div>
          {/* <BlogForm /> */}
          <BlogList />
        </div>
      </div>
    );
  }
}

export default Home;
