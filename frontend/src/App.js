// import StatsForm from './components/StatsForm';
import StatsList from './components/StatsList';
// import StatsSearch from './components/StatsSearch';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import StatsFormPage from './pages/StatsFormPage';
import GetBetter from './pages/GetBetter';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='enterscore' element={<StatsFormPage />} />
				<Route path='yourstats' element={<StatsList />} />
				<Route path='getbetter' element={<GetBetter />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
