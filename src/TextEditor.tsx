import React, { ChangeEvent } from 'react';
import {subscribeToText} from './api/index'
import {emitText} from './api/index'

const TextEditor: React.FC = () => {

    const [text, setText] = React.useState("");
    const [displayText, setDisplayText] = React.useState("");

    React.useEffect(() => {
        subscribeToText((receivedText: string) => {
            console.log('hella: ', receivedText)    
            setText(receivedText)
            setDisplayText(receivedText)
        })
    }, []) //only invoke on state-change to [], i.e. once ever.

    // receive a broadcast -> update text

    const submitText = () => {
        setDisplayText(text);
        setText("");
    }

    const updateText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
        emitText(event.target.value)
    }

    return (
        <>
            <textarea 
                aria-label="text-area"
                onChange={updateText} 
                value={text}
            >
            </textarea>
            <button onClick={submitText}>
                submit yo text
            </button>
            <div>
                <div>you typed:</div>
                <div aria-label="display">{displayText}</div>
            </div>
        </>
    );
}

export { TextEditor }; 