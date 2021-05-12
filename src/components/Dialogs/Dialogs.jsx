import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messagesElements = props.dialogsPage.messages.map(message => <Message id={message.id}
                                                                              message={message.message}/>);

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea className={s.textArea} ref={newMessageElement} value={props.dialogsPage.newMessageText}
                          onChange={onMessageChange}/>
            </div>
            <span>
                    <button className={s.sendMessageBtn} onClick={addMessage}>Send</button>
                </span>

        </div>

    );
};

export default Dialogs;