import React from "react";
function SimpleCalculator() {

    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');

    const handleFirst = (e) => {
        setFirstNumber(e.target.value);
    };
    const handleSecond = (e) => {
        setSecondNumber(e.target.value);
    };


    return (

        <div className="container">
            <h1>Simple Calculator</h1>
            <label>First Number</label>
            <input type="text" value={firstNumber} onChange={handleFirst}
            />
            <label>Second Number</label>
            <input type="text" value={secondNumber} onChange={handleSecond}
            />
        </div>
    );
}

export default SimpleCalculator;