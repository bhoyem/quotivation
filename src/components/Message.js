import React, { useEffect } from "react";

function Message({ messageText, removeMessage }) {

    useEffect(() => {
        const timerId = setTimeout(() => {
            removeMessage();
        }, 1500);

        return () => {
            clearTimeout(timerId);
            console.log("Cleanup performed")
        }
    });

    return (
        <div className="message">
            <p>
                {messageText}
            </p>
            <span className="close-message" onClick={removeMessage}>x</span>

        </div>
    )
};

export default Message;