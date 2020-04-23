import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionPollResult extends Component {

    render(){
        const {question,author,authedUser} = this.props;
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const optionSelected = question.optionOne.votes.includes(authedUser.id) ? "optionOne" : "optionTwo";
        let optionOneWidth = Math.round((question.optionOne.votes.length / totalVotes) * 100);
        let optionTwoWidth = Math.round((question.optionTwo.votes.length / totalVotes) * 100);
        return(  
            <div>
            <div className='projectContainer'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-sm-8'>
                            <div className='card'>
                                <div className='card-header bold'>Added by {author.name}</div>
                                <div className='card-body'>
                                    <div className='container'>
                                        <div className='row justify-content-center'>
                                            <div className='col-sm-4 border-right vert-align'>
                                                <img src={author.avatarURL}
                                                     alt={`Avatar of ${author.name}`}
                                                     className='avatar w-75'/>
                                            </div>
                                            <div className='col-sm-8'>
                                                <div className='question-info'>
                                                    <div className='col-sm-12 '>
                                                        <div className='results-header'>Results:</div>
                                                        <div className={`card card-poll-results ${(optionSelected === 'optionOne') ? "chosen-answer" : ""}`}>Would you rather {question.optionOne.text}?

                                                            <div className="progress m-progress--sm">
                                                                <div className="progress-bar m--bg-success"
                                                                     style={{ width: optionOneWidth + '%' }}
                                                                     ></div>
                                                            </div>
                                                            <div>
                                                                <span>{question.optionOne.votes.length} out of {totalVotes} votes. ({optionOneWidth}%)</span>
                                                            </div>

                                                        </div>
                                                        <div className={`card card-poll-results ${(optionSelected === 'optionTwo') ? "chosen-answer" : ""}`}>Would you rather {question.optionTwo.text}?

                                                            <div className="progress m-progress--sm">
                                                                <div className="progress-bar m--bg-success"
                                                                     style={{ width: optionTwoWidth + '%' }}
                                                                ></div>
                                                            </div>
                                                            <div>
                                                                <span>{question.optionTwo.votes.length} out of {totalVotes} votes. ({optionTwoWidth}%)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

function mapStateToProps({authedUser, users,questions},props) {
    const {id} = props.match.params;
    const question = questions[id];
    const author = users[question.author];
    return {
        question,
        author: author,
        authedUser,
    }
}

export default connect(mapStateToProps)(QuestionPollResult);