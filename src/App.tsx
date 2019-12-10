import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Dashboard from "./components/Dashboard";
import AddArtists from "./components/AddArtist";
import EditArtist from "./components/EditArtist/EditArtist";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";

import { selectIsAuthenticated } from "./shared/selectors/selectors";
import Login from "./components/Login/Login";

const StyledAppTitle = styled(Typography)`
	flex-grow: 1;
`;

function App() {
	const isAuthenticated = useSelector(selectIsAuthenticated);

	return (
		<Router>
			<AppBar position="relative">
				<AppBar position="static">
					<Toolbar>
						<StyledAppTitle variant="h6">NOBO Bookings</StyledAppTitle>

						{isAuthenticated && (
							<Button href="/dashboard" color="inherit">
								Dashboard
							</Button>
						)}

						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</AppBar>
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
		</Router>
	);
}

export default App;
