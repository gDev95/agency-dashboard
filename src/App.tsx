import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { PrivateRoute } from "./routing";
import { selectIsAuthenticated } from "./selectors/selectors";
import { AddArtists } from "./artist";
import { Dashboard } from "./dashboard";
import { LoginPage } from "./login";
const StyledAppTitle = styled(Typography)`
	flex-grow: 1;
`;

function App() {
	const isAuthenticated = useSelector(selectIsAuthenticated);

	const renderAppRoutes = () => (
		<>
			<Route exact={true} path="/login" component={LoginPage} />
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
			{/* <PrivateRoute
				isAuthenticated={isAuthenticated}
				path="/artist/:id"
				component={EditArtist}
			/> */}
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
			<Route exact={true} path="/artists" component={AddArtists} />
			{/* <Route path="/artists/:id" component={EditArtist} /> */}
		</Router>
	);
}

export default App;
