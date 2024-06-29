import React, { useEffect, useRef, useState } from 'react'
import "./output.css";

const Output = ({ arr }) => {
    const newTitle = useState("");
    const newDesc = useState("");
    const inputRef = useRef(null);
    const textareaRef = useRef(null);

    const handleDelete = (idx) => {
        let updatedBlogs = arr[0].filter((item, index) => index !== idx);
        arr[1](updatedBlogs);
    }
    const handleUpdate = (idx) => {
        let updatedBlogs = [...arr[0]];
        updatedBlogs[idx].edit = true;
        for (let i = 0; i < updatedBlogs.length; i++) {
            if (i !== idx) {
                updatedBlogs[i].edit = false;
            }
        }
        arr[1](updatedBlogs);
        newTitle[1](arr[0][idx].title);
        newDesc[1](arr[0][idx].description);
    }
    const resetBlog = (idx) => {
        let updatedBlogs = [...arr[0]];
        updatedBlogs[idx].edit = false;
        arr[1](updatedBlogs);
    }
    const handleSubmit = (idx) => {
        let updatedBlogs = [...arr[0]];
        updatedBlogs[idx].title = newTitle[0];
        updatedBlogs[idx].description = newDesc[0];
        updatedBlogs[idx].edit = false;
        arr[1](updatedBlogs);
        newTitle[1]("");
        newDesc[1]("");
    }
    const handleKeyDownTitle = (e, idx) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            textareaRef.current.focus();
        }
    };
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [arr]);

    const convertNewlinesToBr = (text) => {
        return text.split('\n').map((str, index) => <React.Fragment key={index}>{str}<br /></React.Fragment>);
    };

    const getData = () => {
        const res = [];
        for (let i = 0; i < arr[0].length; i++) {
            res.push(
                !arr[0][i].edit ?
                    <div className="blog" key={i}>
                        <div className="content">
                            <h1>
                                {arr[0][i].title}
                            </h1>
                            <p>
                                {convertNewlinesToBr(arr[0][i].description)}
                            </p>
                        </div>
                        <div className="btns">
                            <button onClick={() => handleUpdate(i)}>Edit</button>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                        </div>
                    </div>
                    :
                    <form className="blog2" key={i} onSubmit={(e) => { e.preventDefault(); handleSubmit(i); }}>
                        <div className="content">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={newTitle[0]}
                                onChange={(e) => newTitle[1](e.target.value)}
                                onKeyDown={(e) => handleKeyDownTitle(e, i)}
                                ref={inputRef}
                            />
                            <textarea
                                type="text"
                                name="desc"
                                id="desc"
                                rows="16"
                                cols="32"
                                value={newDesc[0]}
                                onChange={(e) => newDesc[1](e.target.value)}
                                ref={textareaRef}
                            />
                        </div>

                        <div className="btns">
                            <button onClick={() => handleSubmit(i)}>Save</button>
                            <button onClick={() => resetBlog(i)}>Cancel</button>
                        </div>

                    </form>
            )
        }
        return res;
    }
    return (
        <div className="output">
            {getData()}
        </div>
    )
}

export default Output
