import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}





export default store;

