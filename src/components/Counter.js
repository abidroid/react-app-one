import React from "react";

function Counter() {

    const [num, setNum] = React.useState(0);

    return (

        <div className="counter-container">

            <h1 className="counter-heading">
                Current Number: {num}
            </h1>

            <div className="button-container">

                <button className="counter-button"
                    onClick={() => setNum(num + 1)}
                >Add 1</button>
                <button
                    onClick={() => setNum(num - 1)}
                    className="counter-button">Subtract 1</button>
            </div>
        </div>
    );
}

export default Counter;