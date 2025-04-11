
function DessertsList(props) {

    const listItems = props.data.map ( dessert => {

        const txt = `${dessert.name} - ${dessert.calories}`;

        return <li>{txt}</li>
    });


    return (

        <ul>
            <li>{listItems}</li>
        </ul>
    );

}

export default DessertsList;