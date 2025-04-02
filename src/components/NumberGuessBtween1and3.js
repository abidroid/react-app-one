

function NumberGuessBetween1and3(){

    function handleClick() {
        let randomNum = Math.floor( Math.random() * 3 ) + 1;

        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }


    return (

        <button onClick={handleClick}>Guess the number between 1 and 3</button>
    );
}

export default NumberGuessBetween1and3;