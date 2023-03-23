import styles from './VideoList.module.css';
const VideoList = ({ title, children }) => (
	<div className={styles.container}>
		<h1>{title}</h1>
		{children || 'Sin videos'}
	</div>
);
export default VideoList;
