import React, { Component } from 'react';
import '../Style.css';
// import Body from './Body';
import Footer from './Footer';
import logo from './photo/logo.jpg';
import { Dropdown,InputGroup,FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventBus from '../common/EventBus';
import AuthService from '../services/auth.service';
export default class Top extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render(){
   const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
        <div>

            <div className="header navbar-light  ">
                <nav className="navbar navbar-expand-lg navbar-light container ">
                    <div className="container-fluid col-md">

                        <Link to = {"/"} className="navbar-brand">
                            <img className="logo" src={logo} alt="Logo" href="/"LOGO /> 
                            <h4 className="mycolor">Investment Assistant</h4>
                        </Link>
                    </div>
                    <div className=" col-right" class="pull-right" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/realtime_data">Now</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/dummycharts">Charts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Companies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/analyze">Analyze</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Research</a>
                            </li>
                            {currentUser ? (
                                <div className="navbar-nav ml-auto">
                                  <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link active text-light" aria-current="page" >
                                      {currentUser.username}
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <a href="/login" className="nav-link active text-light" aria-current="page"  onClick={this.logOut}>
                                      LogOut
                                    </a>
                                  </li>
                                </div>
                              ) : (
                                <div className="navbar-nav ml-auto">
                                  <li className="nav-item">
                                    <Link to={"/login"} className="nav-link active text-light" aria-current="page" >
                                      Sign In
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link to={"/register"} className="nav-link active text-light" aria-current="page" >
                                      Sign Up
                                    </Link>
                                  </li>
                                </div>
                              )}
                            {/* <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/Login">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/Register">Sign up</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>

            </div>



        </div>

    );
  }
}

// export default Top;



// <nav className="navbar navbar-expand navbar-dark bg-dark">
// <Link to={"/"} className="navbar-brand">
//   teamCrapplet
// </Link>
// <div className="navbar-nav mr-auto">
//   <li className="nav-item">
//     <Link to={"/home"} className="nav-link">
//       Home
//     </Link>
//   </li>

//   {showModeratorBoard && (
//     <li className="nav-item">
//       <Link to={"/mod"} className="nav-link">
//         Moderator Board
//       </Link>
//     </li>
//   )}

//   {showAdminBoard && (
//     <li className="nav-item">
//       <Link to={"/admin"} className="nav-link">
//         Admin Board
//       </Link>
//     </li>
//   )}

//   {currentUser && (
//     <li className="nav-item">
//       <Link to={"/user"} className="nav-link">
//         User
//       </Link>
//     </li>
//   )}
// </div>

// {currentUser ? (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/profile"} className="nav-link">
//         {currentUser.username}
//       </Link>
//     </li>
//     <li className="nav-item">
//       <a href="/login" className="nav-link" onClick={this.logOut}>
//         LogOut
//       </a>
//     </li>
//   </div>
// ) : (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/login"} className="nav-link">
//         Sign In
//       </Link>
//     </li>

//     <li className="nav-item">
//       <Link to={"/register"} className="nav-link">
//         Sign Up
//       </Link>
//     </li>
//   </div>
// )}
// </nav> 