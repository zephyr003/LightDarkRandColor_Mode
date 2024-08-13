import { useState } from "react";

function State() {
    const [username, setUsername] = useState("John");
    const [bgColor, setbgColor] = useState("grey");
    const [mode, setMode] = useState("Light");
    const [col, setColor] = useState("");
    const handleChange = () => {
        setUsername(username === "John" ? "Doe": "John");
    };

    const changeModes = () => {
        setbgColor(bgColor === "grey" ? "white": "grey");
        setMode(mode==="Light"? "Dark":"Light");
    };

    const randomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          setColor(color);
    };
    return (
        <div style={{backgroundColor: col, padding: 350}}>
            <h1>State</h1>
            <h3>{username}</h3>
            <p><button onClick={handleChange}>Change Username</button></p>
            {/*<p><button onClick={changeModes}>{mode} Mode</button></p>*/}
            <p><button onClick={randomColor} style={{backgroundColor: col, borderRadius: 5, padding: 10}}>{col} Color</button></p>
        </div>
    )
}

export default State;
