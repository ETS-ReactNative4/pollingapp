import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import Post from '../post/Post.js';
import './postSection.css';


class postSection extends Component {
  constructor(props){
    super(props);
    this.state = {
        posts: [],
        page: 1,
        next: null,
        isLoaded: false,
        scrolling: false
    }

    this.loadMore = this.loadMore.bind(this);
    this.loadPosts = this.loadPosts.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount(){
    this.loadPosts()
    this.scrollListener = window.addEventListener('scroll', (e) => {
        this.handleScroll(e)
    })
  }

  handleScroll(){
      const {scrolling, next, page} = this.state
      if (scrolling) return
      if (next === null) return
      const lastLi = document.querySelector('ul.posts > li:last-child')
      const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
      const pageOffset = window.pageYOffset + window.innerHeight
      var bottomOffset = 20
      if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
  }

  loadPosts(){
    const url = 'http://localhost:8000/api/post/?page=' + this.state.page
    fetch(url)
      .then(res => res.json())
      .then(json => {
          console.log(json);
          console.log(this.state.posts)
          this.setState({
              isLoaded: true,
              posts: [...this.state.posts, ...json.results],
              next: json.next,
              scrolling: false
          })
      }); 
  }

  loadMore(){
      this.setState(prevState => ({
          page: prevState.page + 1,
          scrolling: true
      }))

      this.loadPosts();
  }

  render() {

    var {isLoaded, posts} = this.state;

    if(!isLoaded) {
        return <div>Loading...</div>;
    }

    else{

        return (
            <div>
                <ul className="posts">
                    {posts.map(post =>

                    <li key={post.post_id}>
                        <Post 
                            upvotes={post.post_upvotes} 
                            title={post.post_title}
                            profile={post.post_profile}
                            tags={post.post_tags}
                        />
                    </li>)
                    }

                </ul>
            </div>
        );

    }
  }
}

export default postSection;