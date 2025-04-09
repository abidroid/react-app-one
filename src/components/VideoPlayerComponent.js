import ReactPlayer from "react-player";

function VideoPlayerComponent(props) {

    return (

        <ReactPlayer
        url={props.videoUrl}
        height={400}
        controls={true}
        />
    );

}

export default VideoPlayerComponent;