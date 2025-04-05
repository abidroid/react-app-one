
const MoodChanger = () => {
    const moods = ['😊', '😢', '😡', '😴', '🤪', '😍', '😎'];

    const [mood, setMood] = React.useState('😊');

    const changeMood = () => {
        const randomIndex = Math.floor( Math.random() * moods.length);

        setMood(moods[randomIndex]);
    }
}

export default MoodChanger;