import styles from './VideoItem.module.css';
const VideoItem = ({ title, duration, date, description }) => {
	return (
		<div className={styles.container}>
			<h3>{title}</h3>
			<div>
				<span>{duration}</span>
				<span>{date}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default VideoItem;
/*
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
*/
