
function DessertsList(props) {

    const filteredAndSortedDesserts = props.data
    .filter( dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);



    const listItems = filteredAndSortedDesserts.map ( dessert => {

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