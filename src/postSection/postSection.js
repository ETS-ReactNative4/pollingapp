import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import Post from '../post/Post.js';
import './postSection.css';


class postSection extends Component {
  constructor(props){
    super(props);
    this.state = {
        posts: [],
        isLoaded: false,
    }
  }

  componentDidMount(){
      fetch('http://localhost:8000/api/post/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                posts: json,
            })
        });
  }

  render() {

    var {isLoaded, posts} = this.state;

    if(!isLoaded) {
        return <div>Loading...</div>;
    }

    else{

        return (
            <div>
                {posts.map(post => (
                    <Post 
                        upvotes={post.post_upvotes} 
                        title={post.post_title}
                        profile={post.post_profile}
                        tags={post.post_tags}
                    />
                ))}
            </div>
        );

    }
  }
}

export default postSection;