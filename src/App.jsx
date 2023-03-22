import VideoItem from './components/VideoItem';
import './App.css';

const App = () => {
	return (
		<div className='container'>
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
		</div>
	);
};

export default App;
