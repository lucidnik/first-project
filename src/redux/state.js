import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {

        posts: [
            {message: 'Testing map', likesCount: 12},
            {message: 'This is cool', likesCount: 53},
            {message: 'finally getting the hang of it', likesCount: 21},
            {message: 'dopeeee', likesCount: 19}
        ],

    },

    dialogsPage: {

        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'yo'},
            {id: 3, message: 'sup'},
            {id: 4, message: 'test'},
            {id: 5, message: 'working'}
        ],

        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Mikita'},
            {id: 4, name: 'Gleb'},
            {id: 5, name: 'James'}
        ],
    }
};

export let addPost = (postMessage) => {

    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 1
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)

}


export default state;
