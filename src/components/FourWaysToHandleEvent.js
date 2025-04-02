
function FourWaysToHandleEvent() {


    return (
        <>
            <button
                onClick={function () {
                    console.log('first example');
                }}
            >
                An inline anonymous ES5 function event handler
            </button>
            <button></button>
            <button></button>
            <button></button>
        </>
    );
}

export default FourWaysToHandleEvent;