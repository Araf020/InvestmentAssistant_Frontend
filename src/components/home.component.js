import React, { Component } from "react";
// import Top from "./Top";
import UserService from "../services/user.service";
import Footer from "./Footer";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div>
      <div className="container">
        <header className="container">
          <h3>{this.state.content}</h3>
        </header>
       
      </div>
      {/* <Footer/> */}
      </div>
      
      
    );
  }
}