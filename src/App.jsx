import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { Container, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { UserContext } from './Hooks/UserContext';
import { ToastContainer } from 'react-toastify';
import theme from './styling';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ControlPanel from "./Pages/ControlPanel";
import Settings from "./Pages/Settings";
import Login from './Pages/Login';
import ComingSoon from './Components/ComingSoon';

const TRACKING_ID = "G-XQDHE464FW";
ReactGA.initialize(TRACKING_ID);

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
		})
		return () => {
			unsubscribe();
		}
	}, []);

	useEffect(() => {
		if (document.location.hostname.search("localhost") === -1) {
			ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search + window.location.host});
		}}, []);

	return (
		<BrowserRouter>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<UserContext.Provider value={user}>
					<ThemeProvider theme={theme}>
						<ToastContainer/>
						<NavBar/>
						<Container maxWidth="xl">
							<Routes>
								<Route path="/" element={<Home/>}/>
								<Route path="/video-stream" element={<ComingSoon/>}/>
								<Route path="/dashboard" element={<Dashboard/>}/>
								<Route path="/control-panel/*" element={<ControlPanel/>}/>
								<Route path="/settings" element={<Settings/>}/>
								<Route path="/login" element={<Login/>}/>
							</Routes>
						</Container>
					</ThemeProvider>
				</UserContext.Provider>
			</LocalizationProvider>
		</BrowserRouter>
	);
}

export default App;
