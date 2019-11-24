import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import styled from "styled-components";

import Dashboard from "./components/Dashboard";
import AddArtists from "./components/AddArtist";
import EditArtist from "./components/EditArtist/EditArtist";

const StyledAppTitle = styled(Typography)`
	flex-grow: 1;
`;

function App() {
	return (
		<Router>
			<AppBar position="relative">
				<AppBar position="static">
					<Toolbar>
						<StyledAppTitle variant="h6">NOBO Bookings</StyledAppTitle>
						<Button href="/dashboard" color="inherit">
							Dashboard
						</Button>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</AppBar>
			<Route exact={true} path="/dashboard" component={Dashboard} />
			<Route exact={true} path="/dashboard/artists" component={AddArtists} />
			<Route path="/dashboard/artist/*" component={EditArtist} />
		</Router>
	);
}

export default App;
