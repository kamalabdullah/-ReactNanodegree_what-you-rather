export const RECEIVE_USERS ='RECEIVE_USERS'
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER';
export const ADD_USER_QUESTION= 'ADD_USER_QUESTION'
export function receiveUsers(users) {
    return{
        type:RECEIVE_USERS,
        users
    }
}
export function addUserQuestionAnswer(authedUser, questionId, selectedOption) {
    return {
        type: ADD_USER_QUESTION_ANSWER,
        authedUser,
        questionId,
        selectedOption
    }
}
export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}