import React from "react";

function Lightbulb() {

    const [bulbStatus, setState] = React.useState(false);

    function handleClick() {
        setState(!bulbStatus);
    }

    return (
        <>
            <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: bulbStatus ? "yellow" : "black"

            }}></div>
            <button onClick={handleClick}>Change Status</button>
        </>
    );

}

export default Lightbulb;