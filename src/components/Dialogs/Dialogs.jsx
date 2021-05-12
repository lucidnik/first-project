import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messagesElements = props.messages.map(message => <Message id={message.id}
                                                                              message={message.message}/>);

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
                <textarea className={s.textArea} ref={newMessageElement} value={props.newMessageText}
                          onChange={onMessageChange}/>
            </div>
            <span>
                    <button className={s.sendMessageBtn} onClick={addMessage}>Send</button>
                </span>

        </div>

    );
};

export default Dialogs;