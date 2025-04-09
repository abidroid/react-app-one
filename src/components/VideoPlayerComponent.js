import ReactPlayer from "react-player";

function VideoPlayerComponent(props) {

    return (

        <ReactPlayer
        url={props.videoUrl}
        height={200}
        controls={true}
        />
    );

}