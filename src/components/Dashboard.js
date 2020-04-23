import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs,Tab} from 'react-bootstrap'
import Question from './question'
import {Redirect } from 'react-router-dom'
class Dashboard extends Component {

    state = {
        'questionsToShow': 'unanswered',
        'activeTab': 'unanswered'
    };

    handleTabChange = (e, tab) => {
        this.setState(() => ({
            questionsToShow: tab,
            activeTab: tab
        }));
    };

    render() {
        const {questionIds,authedUser} = this.props;
        if(!authedUser)
        return <Redirect to='/login'/>;
        const userAsweredQuestions = Object.keys(authedUser.answers);
        const userUnsweredQuesions = questionIds.filter(id=> !userAsweredQuestions.includes(id) );
        return (
            <div className='container'>
              <div className='row justify-content-center'>
                 <div className='col-sm-8'>
                    <div className='center'>
                        <Tabs defaultActiveKey="Unanswered" id="uncontrolled-tab-example">
                        <Tab eventKey="Unanswered" title="Unanswered Qiestions">
                        {
                              userUnsweredQuesions.map((Id) =>(
                                  <Question key={Id} id ={Id} isAnswer={false}/>
                              ))
                          }
                        </Tab>
                        <Tab eventKey="Answered" title="Answered Questions">
                          {
                              userAsweredQuestions.map((Id) =>(
                                  <Question key={Id} id ={Id} isAnswer={true}/>
                              ))
                          }
                        </Tab>
                        </Tabs>
                     </div>
                 </div>
               </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users,questions}) {
    if(!authedUser)
    return <Redirect to='/login'/>;
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser:users[authedUser.id]
    }
}

export default connect(mapStateToProps)(Dashboard);