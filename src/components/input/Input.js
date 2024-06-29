import React, { useState } from 'react'
import "./input.css";

const Input = ({ arr }) => {
    const title = useState("");
    const desc = useState("");

    const handleBtn = (e) => {
        if (!title[0] || !desc[0]) return;
        let updatedBlogs = [{ "title": title[0], "description": desc[0] }, ...arr[0]];
        arr[1](updatedBlogs);
        title[1](""); desc[1]("");
    }
    return (
        <form>
            <div className="title">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Enter the title..."
                    value={title[0]}
                    onChange={(e) => title[1](e.target.value)}
                />
            </div>
            <div className="desc">
                <label htmlFor="desc">Description</label>
                <textarea
                    id="desc"
                    rows="6"
                    cols="30"
                    type="text"
                    placeholder="Write the description..."
                    value={desc[0]}
                    onChange={(e) => desc[1](e.target.value)}
                />
            </div>
            <div className="btn">
                <input type="button" value="Add" onClick={handleBtn} />
            </div>
        </form>
    )
}

export default Input
