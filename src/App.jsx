import { Container, ThemeProvider } from '@mui/material';
import NavBar from './Components/NavBar';
import theme from './styling';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ComingSoon from './Components/ComingSoon';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { UserContext } from './Hooks/UserContext';
import { useEffect, useState } from 'react';

const App = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		})
	})

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
							<Route path="/control-panel" element={<ComingSoon/>}/>
							<Route path="/settings" element={<ComingSoon/>}/>
							<Route path="/login" element={<Login/>}/>
						</Routes>
					</Container>
				</ThemeProvider>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
