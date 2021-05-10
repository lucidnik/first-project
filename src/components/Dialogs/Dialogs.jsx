import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {updateNewMessageText} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messagesElements = props.dialogsPage.messages.map(message => <Message id={message.id}
                                                                              message={message.message}/>);

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        updateNewMessageText(text)
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
                <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>

    );
};

export default Dialogs;