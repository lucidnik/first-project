import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {

        posts: [
            {message: 'Testing map', likesCount: 12},
            {message: 'This is cool', likesCount: 53},
            {message: 'finally getting the hang of it', likesCount: 21},
            {message: 'dopeeee', likesCount: 19}
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
};

export let addPost = () => {

    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 1
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let addMessage = () => {

    let newMessage = {
        id:6,
        message: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)

}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}


export default state;
