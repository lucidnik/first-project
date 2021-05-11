let store = {

    _state: {
        profilePage: {

            posts: [
                {message: 'Testing map', likesCount: 12},
                {message: 'This is cool', likesCount: 53},
                {message: 'finally getting the hang of it', likesCount: 21},
            ],
            newPostText: ''

        },

        dialogsPage: {

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
    },

    _callSubscriber() {
        debugger
        console.log('state was changed')
    },

    addMessage() {

        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)

    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 1
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

    },

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

export default store;

