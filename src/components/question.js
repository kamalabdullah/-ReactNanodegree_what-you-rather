import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component{

    render(){
        const{question,questionAuthor,isAnswerFlag} = this.props;
        let viewPollLink = '';
        if (isAnswerFlag) {
            viewPollLink = `/question/${question.id}/result`;
        } else {
            viewPollLink = `/question/${question.id}`;
        }
        return(
            <div className='margin-top-10'>
             <div className='card'>
               <div className='card-header bold'>{questionAuthor.name} asks would you rather...</div>
                <div className='card-body'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-4 border-right center'>
                                <img src={questionAuthor.avatarURL} alt={`Avatar of ${questionAuthor.name}`} className='avatar w-75'/>
                            </div>
                            <div className='col-sm-8'>
                                <div className='question-info'>
                                    <p className='center'>{question.optionOne.text} <strong>OR</strong> {question.optionTwo.text}</p>
                                        <Link  to={viewPollLink}  className='center'>
                                            <button
                                                className='btn btn-outline-primary reset-vertical-margin '>
                                                View Poll
                                            </button>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


function mapStateToProps({authedUser,questions,users},{id,isAnswer}) {
    const question = questions[id];
    const questionAuthor = users[question.author]
    const isAnswerFlag = isAnswer;
    return {
        authedUser,
        question,
        questionAuthor,
        isAnswerFlag
      }
}

export default connect(mapStateToProps)(Question);