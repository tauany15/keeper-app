import React, { useState } from "react";

function CreateArea(props) {

    const [inputText, setInput] = useState({
        title:"",
        text:""
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setInput({
            ...inputText,
            [name]:value
        });
    }

    return (
        <form>
            <div className="input">
                <input type="text" onChange={handleChange} name="title" value={inputText.title} placeholder="Title"></input>
                <input className="input" type="text" onChange={handleChange} name="text" value={inputText.text} placeholder="Add your notes text here..."></input>
                <button className="button" type="button" onClick={() => {
                    props.onClicked(inputText);
                    setInput({title:"",text:""});
                }}>+</button>
            </div>
        </form>
    )
}

export default CreateArea;