import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPost} from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
componentDidMount() {
  this.props.fetchPost();
}

renderPosts(){
  return _.map(this.props.posts, post=> {
    return (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    )
  })
}
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-groups">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({ fetchPost }, dispatch)
}

function mapStateToProps(state){
  return { posts: state.posts};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
