import React, { useState } from 'react'



export default function TextForm(props) {

    let handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", 'success');
    }

    let handleOnChange = (event) => {
        setText(event.target.value);
    }

    let handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", 'success');
    }

    let clear = () => {
        setText('');
    }

    let handleToRemove = () => {
        let myText = text.split(/[ ]+/);
        setText(myText.join(' '));
        props.showAlert("Removed extra space", 'success');
    }

    let copyText = () => {
        let ourText = document.getElementById('myBox');
        ourText.select();
        navigator.clipboard.writeText(ourText.value);
        props.showAlert("Copied to Clipboard", 'success');
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleToRemove}>Remove space</button>
                <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={clear}>ClearAll</button>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <hr />
                <h3>Your text summary :</h3>
                <p>{text.split(' ').length - 1} words {text.length} characters</p>
                <p>{0.008 * text.split(' ').length - 0.008} Minutes to read</p>
                <h4>Preview :</h4>
                <p>{text === '' ? 'Enter something in textarea to preview it' : text}</p>
            </div>
        </>
    )
}
