import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";


const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        updateNewPostText(text)
    }


    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange}/>
                    <button onClick={addPost}>Add Post</button>
                </div>

                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;

