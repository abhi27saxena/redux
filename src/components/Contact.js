import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import  {saveContact}  from "./../redux/actions";

class Contact extends React.Component {
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
      const data = res.data.data;
      this.props.saveContact(data)
  })
  }
  render() {
    const {contactData} = this.props
    return (
      <>
      <h1>Contact</h1>
      <div className="users">
      {contactData ? contactData.map((user) => (
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
    contactData: state.contactReducer.payload
  };
};
const mapDispatchToProps = dispatch => {
  return {
    saveContact: (data) => dispatch(saveContact(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
