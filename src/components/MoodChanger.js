import React from "react";
const MoodChanger = () => {
    const moods = ['😊', '😢', '😡', '😴', '🤪', '😍', '😎'];

    const [mood, setMood] = React.useState('😊');

    const changeMood = () => {
        const randomIndex = Math.floor(Math.random() * moods.length);

        setMood(moods[randomIndex]);
    }

    return (

        <div
            style={{ textAlign: 'center', fontSize: '4rem', marginTop: '50px' }}
        >
            <p>Your Mood:</p>
            <div>{mood}</div>

            <button onClick={changeMood}
                style={{ marginTop: '20px', fontSize: '1.5rem', padding: '10px 20px' }}

            >Change Mood</button>
        </div>

    );
}

export default MoodChanger;