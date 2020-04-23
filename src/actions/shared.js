import {getInitialData,_saveQuestionAnswer,_saveQuestion} from '../utils/_DATA'
import {receiveUsers,addUserQuestionAnswer,addUserQuestion} from './users'
import {receiveQuestions,addQuestionAnswer,addQuestion} from './questions'
import { showLoading, hideLoading} from 'react-redux-loading'


export  function handleInitialData() {
    return(dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions })=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestionAnswer (questionId, selectedOption) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const {authedUser} = getState();
        const authedUserId = authedUser.id;
        _saveQuestionAnswer({
            authedUser:authedUserId,
            qid: questionId,
            answer: selectedOption
        }).then(() => {
            dispatch(addQuestionAnswer(authedUser, questionId, selectedOption));
            dispatch(addUserQuestionAnswer(authedUser, questionId, selectedOption));
            dispatch(hideLoading());
        });
    }
}
export function handleAddQuestion (optionOneText, optionTwoText, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const {authedUser} = getState();
        const author = authedUser.id;
        _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        }).then((question) => {
            dispatch(addUserQuestion(question));
            dispatch(addQuestion(question));
            dispatch(hideLoading());
        }).then(callback);
    }
}
