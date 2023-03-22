const VideoItem = props => {
	return (
		<div>
			<h3>{props.title}</h3>
			<h4>{props.duration}</h4>
			<h4>{props.date}</h4>
			<h4>{props.description}</h4>
		</div>
	);
};

export default VideoItem;
