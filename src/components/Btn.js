

function Btn(props){


    const clickHandler = () => console.log(
        'clicked'
    );
    
    return (

        <button onClick={clickHandler}>Click me</button>

    );
}

export default Btn;