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

    const addition = () => {
        const firstN = Number(firstNumber);
        const secondN = Number(secondNumber);

        let r = firstN + secondN;

        setResult(r);

    }

    const subtraction = () => {
        const firstN = Number(firstNumber);
        const secondN = Number(secondNumber);

        let r = firstN - secondN;

        setResult(r);
    }
    const multiplication = () => {
        const firstN = Number(firstNumber);
        const secondN = Number(secondNumber);

        let r = firstN * secondN;

        setResult(r);
    }
    const division = () => {
        const firstN = Number(firstNumber);
        const secondN = Number(secondNumber);

        let r = firstN / secondN;

        setResult(r);
    }
    return (

        <div className="calculator-container">
            <h1>Simple Calculator</h1>
            <label className="calculator-label">First Number</label>
            <input type="text" value={firstNumber} onChange={handleFirst}
            />
            <br />
            <label className="calculator-label">Second Number</label>
            <input type="text" value={secondNumber} onChange={handleSecond}
            />

            <div className="button-row">
                <button className="btn"
                    onClick={addition}>Add</button>
                <button className="btn"
                    onClick={subtraction}>Subtract</button>
                <button className="btn"
                    onClick={multiplication}>Multiply</button>
                <button
                    className="btn"
                    onClick={division}>Divide</button>
            </div>
            <span>{result}</span>
        </div>
    );
}

export default SimpleCalculator;