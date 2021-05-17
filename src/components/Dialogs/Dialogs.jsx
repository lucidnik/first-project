import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = state.messages.map(message => <Message id={message.id} message={message.message}/>);
    let newMessageText = state.newMessageText


    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
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
                <textarea className={s.textArea} ref={newMessageElement} value={newMessageText}
                          onChange={onMessageChange}/>
            </div>
            <span>
                    <button className={s.sendMessageBtn} onClick={addMessage}>Send</button>
                </span>

        </div>

    );
};

export default Dialogs;