import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import NewMessage from "./NewMessage";



const Dialogs = (props) => {

    let textAreaElement = React.createRef();

    let inputMessage = () => {
        props.addMessage();
    }

    let newMessageChange = () => {
        let text = textAreaElement.current.value;
        props.updateNewMessageText(text);
    }

    let dialogElements = props.dialogsPage.dialogsData.map(d => (
        <DialogItems src={d.src} name={d.name} id={d.id} received={d.received} sent={d.sent}/>));

    let messageElements = props.dialogsPage.dialogsData.map(m => (
        <Messages my_src={m.my_src} src={m.src} id={m.id} received={m.received} sent={m.sent}/>));

    let newMessageElements = props.dialogsPage.newMessages.map(nm => (
        <NewMessage NewMessage={nm.newMessageText} src={nm.src}/>));

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                    {/*{props.dialogsPage.newMessageText}*/}
                    {newMessageElements}
                    <textarea onChange={newMessageChange} ref={textAreaElement} value={props.dialogsPage.newMessagesText} placeholder={'Enter you message'}></textarea>
                    <div>
                        <button onClick={inputMessage}>Send message</button>
                    </div>

                </div>
            </div>
    )
}

export default Dialogs;