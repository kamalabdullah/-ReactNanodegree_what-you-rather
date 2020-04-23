import React, {Component} from 'react';
import {connect} from 'react-redux';

class Leaderboard extends Component {

    render(){
        const {users} = this.props;
        let usersInfo = users.map((user) => {
            let questionsAnswered = user.answers != null ? Object.values(user.answers).length : 0;
            let questionsAsked = user.questions!= null ?user.questions.length : 0;

            return {
                'name':user.name,
                'avatar': user.avatarURL,
                'questionsAnswered': questionsAnswered,
                'questionsAsked': questionsAsked,
                'totalScore': questionsAnswered + questionsAsked
            }
        });
        usersInfo.sort((a, b) => {
            if (b.totalScore < a.totalScore) return -1;
            if (b.totalScore > a.totalScore) return 1;
            return 0;
        });
        return(
                <div>
                    <div className='projectContainer'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-sm-8'>
                                    {usersInfo.map((user, index) => {
                                        return (
                                            <div className='margin-top-10' key={index}>
                                                <div className='card'>
                                                    <div className='card-header bold'>{user.name}</div>
                                                    <div className='card-body'>
                                                        <div className='container'>
                                                            <div className='row justify-content-center'>
                                                                <div className='col-sm-4 border-right center'>
                                                                    <img src={user.avatar} alt={`Avatar of ${user.name}`}
                                                                        className='avatar w-75'/>
                                                                </div>
                                                                <div className='col-sm-5 border-right'>
                                                                    <p className='m-30-top'><strong><span
                                                                        className='p-5-right'>Answered Questions:</span></strong>
                                                                        <span
                                                                            className='badge badge-secondary'>{user.questionsAnswered}</span>
                                                                        </p>
                                                                    <p><span className='p-5-right'><strong>Created Questions:</strong></span>
                                                                        <span
                                                                            className='badge badge-secondary'>{user.questionsAsked}</span>
                                                                        </p>
                                                                </div>
                                                                <div className='col-sm-3 m-35-top'>
                                                                    <div className='container'>
                                                                        <div className='row justify-content-center'>
                                                                            <h2><span
                                                                                className='badge badge-info'>{user.totalScore}</span>
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
function mapStateToProps({users}) {
    return {
        users: Object.values(users),
      }
}

export default connect(mapStateToProps)(Leaderboard);