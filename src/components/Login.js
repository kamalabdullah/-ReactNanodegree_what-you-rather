import React,{Component} from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component{
    state = {
        selectedUserID: '',
    }
    handleChange =(e)=>{
        const selectedUserID = e.target.value;
        this.setState(()=>({
            selectedUserID
        }))
    }
    handleLogIn = (e) => {
        e.preventDefault()
         const { dispatch, users } = this.props
         const user = users.filter(s=>s.id === this.state.selectedUserID)[0]
         dispatch(setAuthedUser(user))
         const {from} = this.props.location.state || {from: {pathname: '/'}};
         return <Redirect to={from}/>;
      }
    render(){
        const { selectedUserID } = this.state
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {authedUser } = this.props
        if(authedUser)
            return  <Redirect to={from}/>;
        return(
            <div className="d-inline-block" style={{marginTop: 82}}>
                 <div className="card bg-light mb-3" style={{maxWidth: 288}}>
                 <h5 className="card-header">Welcome to the Would You Rather App!</h5>
                      <div className="card-body">
                        <div className="card-title">Please Sign In to continue </div>
                          <img src={logo} className="App-logo" alt="logo" />
                            <div>
                                <h5>Sign in</h5>
                                <form onSubmit={this.handleLogIn}>
                                        <div>
                                            <select id="usersList" onChange={this.handleChange}>
                                            <option value="">-Please Select User-</option>))
                                            {this.props.users.map((user)=>(
                                                <option  value={user.id} key={user.id}>{user.name}</option>))
                                            }
                                            </select>
                                        </div>
                                        <div>
                                            <button className='btn btn-primary' type='submit'   disabled={selectedUserID === ''}>
                                                Login
                                            </button>  
                                        </div>
                                </form>
                            </div>
                      </div>
                    </div>
            </div>
        )
    }
}

function mapStateToProps({users,authedUser}) {
    return {
        users: Object.values(users),
        authedUser
      }
}

export default connect(mapStateToProps)(Login);
