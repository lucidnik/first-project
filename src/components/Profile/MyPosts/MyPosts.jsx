import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef()

    let addPost = () => {

        props.addPost()
    }

    let onPostChange = () => {

        let newText = newPostElement.current.value
        props.onPostChange(newText)
    }


    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea className={s.textArea} ref={newPostElement} value={props.newPostText}
                              onChange={onPostChange}/>
                    <span>
                        <button className={s.addPostBtn} onClick={addPost}>Add Post</button>
                    </span>
                </div>

                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;

