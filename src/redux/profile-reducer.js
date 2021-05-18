const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {message: 'Testing map', likesCount: 12},
        {message: 'This is cool', likesCount: 53},
        {message: 'finally getting the hang of it', likesCount: 21},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 1}]
            }

        default:
            return state
    }
}


export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText
    }
}

export default profileReducer