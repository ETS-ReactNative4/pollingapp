import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import Post from '../post/Post.js';


class pollPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        post: null,
        isLoaded: false
    }
    console.log(this.props);
    this.loadMore = this.loadMore.bind(this);
    this.loadPost = this.loadPost.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    this.loadPost()
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

  loadPost(){
    let url = 'http://localhost:8000/api/post/?post_id=' + this.props.match.params.pollid
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(json => {
          console.log(json);
          this.setState({
              isLoaded: true,
              post: json.results
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

    var {isLoaded, post} = this.state;

    if (!isLoaded){
        return <div>Loading...</div>
    }

    else {
        return (
            <div>
                <div className="title"> 
                    <div className="fleft" style={{float:'left'}}>{post[0].post_tags}</div>
                    <div className="fright" style={{float:'right'}}>Created by: {post[0].post_profile}</div>
                    <h1 className="center" style={{textAlign:'center'}}>{post[0].post_title}</h1>
                </div>
                <div className="choices">
                    <div>{post[0].post_choice_one}</div>
                    <div>{post[0].post_choice_two}</div>
                    <div>{post[0].post_choice_three}</div>
                    <div>{post[0].post_choice_four}</div>
                </div>
            </div>
        );

    }
  }

}

export default pollPage;