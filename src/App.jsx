import { Container, ThemeProvider } from '@mui/material';
import NavBar from './Components/NavBar';
import theme from './styling';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ComingSoon from './Components/ComingSoon';
import Dashboard from './Pages/Dashboard';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<NavBar/>
				<Container maxWidth="xl">
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/video-stream" element={<ComingSoon/>}/>
						<Route path="/dashboard" element={<Dashboard/>}/>
						<Route path="/control-panel" element={<ComingSoon/>}/>
						<Route path="/settings" element={<ComingSoon/>}/>
					</Routes>
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
