import React, { ChangeEvent } from 'react';

const TextEditor: React.FC = () => {

    const [text, setText] = React.useState("");
    const [displayText, setDisplayText] = React.useState("");

    const submitText = () => {
        setDisplayText(text);
        setText("");
    }

    const updateText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
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