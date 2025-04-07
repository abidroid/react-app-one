
function SingleViewConditionalUpdate() {

    const date = new Date();
    const day = date.toLocaleString("en-us", { weekday: "long" });
    const morning = date.getHours() >= 6 && date.getHours() <= 12;

    let dayMessage;

    if (day.toLocaleLowerCase() === "monday") {
        dayMessage = `Happy ${day}`;
    } else if (day.toLowerCase() === "tuesday") {
        dayMessage = `${day}, four days to go`;
    } else if (day.toLowerCase() === "wednesday") {
        dayMessage = `${day}, half way there`;

    } else if (day.toLowerCase() === "thursday") {
        dayMessage = `${day}, start planning the weekend`;

    } else if (day.toLowerCase() === "friday") {
        dayMessage = `${day}, woo - hoo, the weekend is coming`;

    } else {
        dayMessage = `stay calm and keep having fun`;

    }


    return (
        <div>
            <h1>{dayMessage}</h1>
            {morning ? <h2>Have you had breakfast yet?</h2> : ""}
        </div>
    );
}

export default SingleViewConditionalUpdate;