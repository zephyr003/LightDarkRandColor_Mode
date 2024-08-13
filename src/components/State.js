import { useState } from "react";

function State() {
    const [username, setUsername] = useState("John");
    const [bgColor, setbgColor] = useState("grey");
    const [mode, setMode] = useState("Light");
    const handleChange = () => {
        setUsername(username === "John" ? "Doe": "John");
    };

    const changeModes = () => {
        setbgColor(bgColor === "grey" ? "white": "grey");
        setMode(mode==="Light"? "Dark":"Light");
    };
    return (
        <div style={{backgroundColor: bgColor, padding: 350}}>
            <h1>State</h1>
            <h3>{username}</h3>
            <p><button onClick={handleChange}>Change Username</button></p>
            <button onClick={changeModes}>{mode} Mode</button>
        </div>
    )
}

export default State;