import { useEffect, useState } from 'react';
import { Container, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { UserContext } from './Hooks/UserContext';
import theme from './styling';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ControlPanel from "./Pages/ControlPanel";
import Settings from "./Pages/Settings";
import Login from './Pages/Login';
import ComingSoon from './Components/ComingSoon';

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

	return (
		<BrowserRouter>
			<UserContext.Provider value={user}>
				<ThemeProvider theme={theme}>
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
		</BrowserRouter>
	);
}

export default App;
