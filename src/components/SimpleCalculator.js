import React from "react";
function SimpleCalculator() {

    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [result, setResult] = React.useState('');
    const handleFirst = (e) => {
        setFirstNumber(e.target.value);
    };
    const handleSecond = (e) => {
        setSecondNumber(e.target.value);
    };

    const addition = ()=> {
        const firstN = Number(firstNumber);
        const secondN = Number(secondNumber);

        let r = firstN + secondN;

        setResult(r);

    }

    return (

        <div className="container">
            <h1>Simple Calculator</h1>
            <label>First Number</label>
            <input type="text" value={firstNumber} onChange={handleFirst}
            />
            <br />
            <label>Second Number</label>
            <input type="text" value={secondNumber} onChange={handleSecond}
            />

            <div className="buttonRow">
                <button onClick={addition}>Add</button>
                <button>Subtract</button>
                <button>Multiply</button>
                <button>Divide</button>
            </div>
            <span>{result}</span>
        </div>
    );
}

export default SimpleCalculator;