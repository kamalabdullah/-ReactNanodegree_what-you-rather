import React,{Component,Fragment } from 'react';
import '../css/App.css';
import Login from './Login'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import CustomNav from './Nav';
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import QuestionPoll from './questionPoll'
import QuestionPollResult from './QuestionPollResult'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Logout from './Logout'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
        return (
        <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
          
              {this.props.loading === true
                ? null
                : 
                <div>
                  {this.props.authedUser != null &&
                      < CustomNav/>
                  }
                    <div className='App'>
                        <Route path='/' exact component={Dashboard} />
                         <Route path='/dashboard' exact component={Dashboard} />
                         <Route path='/question/:id' exact component={QuestionPoll} />
                         <Route path='/question/:id/result' component={QuestionPollResult} />
                         <Route path='/login' component={Login} />
                         <Route path='/lougout' component={Logout} />
                         <Route path='/add' component={NewQuestion} />
                         <Route path='/leaderboard' component={Leaderboard} />
                        </div>
                  </div>}
            </div>
          </Fragment>
        </Router>
         
        );
  }
}

function mapStatetoProps({ users,authedUser }) {
  return {
    loading: !Object.keys(users).length > 0,
    authedUser
  }
}

export default connect(mapStatetoProps)(App)
