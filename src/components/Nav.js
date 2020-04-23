import React,{Component} from 'react'
import '../css/App.css';
import {connect} from 'react-redux'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
class CustomNav extends Component{
    render(){
        return (
                  <Navbar bg="light" expand="lg" className="nav-margin">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <NavLink to='/' exact activeClassName='active'
                                          className="nav-item nav-link">Home</NavLink>
                       <NavLink to='/add' exact activeClassName='active'
                                          className="nav-item nav-link">New Question</NavLink>
                        <NavLink to='/leaderboard' exact activeClassName='active'
                                          className="nav-item nav-link">Leaderboard</NavLink>
                    </Nav>
                  
                    {this.props.authedUser != null &&
                    <div className="form-inline my-2 my-lg-0">
                          <span>Hello,</span> 
                          <NavDropdown title={this.props.authedUser.name} id="basic-nav-dropdown">
                              <NavLink to='/lougout' exact
                                          className="nav-item nav-link">Log Out</NavLink>
                          </NavDropdown>
                          <img src={this.props.authedUser.avatarURL} width="30" height="30" alt="logo" className="logedIn-img"/>
                      </div>
                    }
                  </Navbar.Collapse>
                </Navbar>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
      }
}

export default connect(mapStateToProps)(CustomNav);