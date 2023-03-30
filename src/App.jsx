import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';
import styles from './App.module.css';
import FormControlado from './components/FormControlado';
const App = () => {
	return (
		<div className={styles.container}>
			<VideoList title='Programacion'>
				<VideoItem
					title='React'
					duration={30}
					date='15-03-2023'
					description='Este es un video de React'
				/>
				<VideoItem
					title='Java'
					duration={30}
					date='15-03-2023'
					description='Este es un video de React'
				/>
			</VideoList>
			<VideoList title='Musica'>
				<VideoItem
					title='Salsa'
					duration={30}
					date='15-03-2023'
					description='Este es un video de React'
				/>
			</VideoList>
			<VideoList title='Pdte' />
			<br />
			<FormControlado />
			<br />
		</div>
	);
};

export default App;
