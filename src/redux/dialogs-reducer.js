const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'sup'},
        {id: 4, message: 'test'},
        {id: 5, message: 'working'}
    ],
    newMessageText: '',

    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Mikita'},
        {id: 4, name: 'Gleb'},
        {id: 5, name: 'James'}
    ],
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 7, message: state.newMessageText}]
            }
        }
        default:
            return state

    }
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const updateNewMessageTextActionCreator = (newText) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', newText
    }
}

export default dialogsReducer