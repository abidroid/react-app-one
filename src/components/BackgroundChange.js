import React from "react";

function BackgroundChange() {

    const [bgColor, setBgColor] = React.useState('yellow');
    return (

        <div className="container"

            style={{
                backgroundColor: bgColor,
                height: "100vh"
            }}
        >
            <button
                onClick={() => setBgColor("red")}
                className="btn">Red</button>
            <button
                onClick={() => setBgColor("green")}
                className="btn">Green</button>
            <button
                onClick={() => setBgColor("blue")}
                className="btn">Blue</button>
        </div>
    );

}

export default BackgroundChange;