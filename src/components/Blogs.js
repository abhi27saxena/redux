import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
    axios.get(`https://reqres.in/api/users?page=1`)
  .then(res => {
      const userRole = res.data.data;
      this.props.saveBlogListing(userRole)
  })
  }
  render() {
    const {blogData} = this.props
    return (
      <>
      <h1>Blogs</h1>
      <div className="users">
      {blogData ? blogData.map((user) => (
        <>
        <div className="user">{user.id}</div>
        <div className="user">{user.email}</div>
        </>
        
      )):''}
    </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    blogData: state.blogReducer.payload || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    saveBlogListing: (data) => dispatch({ 
      type: 'BLOG_LISTING',
      payload: data
    })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
