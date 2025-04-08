import abidse from '../assets/images/abidse.png'
function ImageDisplay() {


    const abidImageUrl = 'https://avatars.githubusercontent.com/u/17814795?v=4';
    return (
        <div>
            <h1>Image Display in 3 ways</h1>
            <h2>Using import</h2>
            <img 
                src={abidse}
                height={200}
                alt='Abid Image'
            />
            <h2>Using require</h2>
            <img
                src={require('../assets/images/abidse.png')}
                height={200}
                alt='Abid image require'
            />

            <h2>Image through url</h2>
            <img
                src='https://avatars.githubusercontent.com/u/17814795?v=4'
                height={200}
                alt='abid github profile'
            />
        </div>
    );
}

export default ImageDisplay;