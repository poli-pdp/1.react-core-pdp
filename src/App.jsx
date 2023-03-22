import VideoItem from './components/VideoItem';

const App = () => {
	return (
		<>
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
		</>
	);
};

export default App;
