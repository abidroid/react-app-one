
function FourWaysToHandleEvent() {

    function thirdBtnClickHandler() {
        console.log('third example');

    }

    const fourthBtnClickHandler = () => console.log('fourth example');


    return (
        <>
            <button
                onClick={function () {
                    console.log('first example');
                }}
            >
                An inline anonymous ES5 function event handler
            </button>

            <button onClick={() => console.log('second example')
            }>
                An inline anonymous ES6 function event handler
            </button>
            <button onClick={thirdBtnClickHandler}>
                using a separate function declaration
            </button>
            <button onClick={fourthBtnClickHandler}>
                using a separate function expression
            </button>
        </>
    );
}

export default FourWaysToHandleEvent;