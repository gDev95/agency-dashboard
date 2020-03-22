import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import { selectIsAuthenticated } from "./shared/selectors/selectors";

import Dashboard from "./components/Dashboard";
import AddArtists from "./components/AddArtist";
import EditArtist from "./components/EditArtist/EditArtist";
import Login from "./components/Login/Login";

const StyledAppTitle = styled(Typography)`
	flex-grow: 1;
`;

function App() {
	const isAuthenticated = useSelector(selectIsAuthenticated);

	const renderAppRoutes = () => (
		<>
			<Route exact={true} path="/login" component={Login} />
			<PrivateRoute
				isAuthenticated={isAuthenticated}
				exact={true}
				path="/"
				component={Dashboard}
			/>
			<PrivateRoute
				isAuthenticated={isAuthenticated}
				path="/artists"
				component={AddArtists}
			/>
			<PrivateRoute
				isAuthenticated={isAuthenticated}
				path="/artist/*"
				component={EditArtist}
			/>
		</>
	);

	const renderNavButton = () => (
		<>
			{isAuthenticated && (
				<Button href="/" color="inherit">
					Dashboard
				</Button>
			)}
			<Button color="inherit">Login</Button>
		</>
	);

	return (
		<Router>
			<AppBar position="relative">
				<AppBar position="static">
					<Toolbar>
						<StyledAppTitle variant="h6">NOBO Bookings</StyledAppTitle>
						<Button href="/" color="inherit">
							Dashboard
						</Button>
					</Toolbar>
				</AppBar>
			</AppBar>
			<Route exact={true} path="/">
				<Redirect to="/dashboard" />
			</Route>
			<Route exact={true} path="/dashboard" component={Dashboard} />
			<Route exact={true} path="/dashboard/artists" component={AddArtists} />
			<Route path="/dashboard/artist/*" component={EditArtist} />
		</Router>
	);
}

export default App;
