import React, { useState } from "react";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import Fab from '@material-ui/core/Fab'
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [row, setRow] = useState("1");
    const [titleHidden, setTitleHidden] = useState(true);
    const [showAdd, setShowAdd] = useState(false)

    function isExpanded() {
        setTitleHidden(false)
        setRow("3");
        setShowAdd(true);
    }

    const [inputText, setInput] = useState({
        title: "",
        text: ""
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setInput({
            ...inputText,
            [name]: value
        });
    }

    return (
        <div>
            <form className="create-note">
                <input type="text" onChange={handleChange} name="title" value={inputText.title} placeholder="Title" hidden={titleHidden}></input>
                <textarea type="text" onChange={handleChange} onClick={isExpanded} name="text" value={inputText.text} placeholder="Add your notes text here..." rows={row}></textarea>
                <Zoom in={showAdd}>
                    <Fab className="button" type="button" onClick={() => {
                        props.onClicked(inputText);
                        setInput({ title: "", text: "" });
                        setRow("1");
                        setTitleHidden("true");
                        setShowAdd(false);

                    }}><Icon path={mdiPlus} size={1} /></Fab>
                </Zoom>
            </form>
        </div>

    )
}

export default CreateArea;