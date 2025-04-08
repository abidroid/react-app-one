import abidse from '../assets/images/abidse.png'
function ImageDisplay() {

    return (
        <div>
            <h1>Image Display in 3 ways</h1>
            <h2>Using import</h2>
            <img 
                src={abidse}
                height={200}
                alt='Abid Image'
            />

        </div>
    );
}

export default ImageDisplay;