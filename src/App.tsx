import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import Dashboard from "./components/Dashboard";
import AddArtists from "./components/AddArtist";
import EditArtist from "./components/EditArtist/EditArtist";

function App() {
	return (
		<Router>
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h6">Enric's Agency Dashboard</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Route exact={true} path="/dashboard" component={Dashboard} />
			<Route exact={true} path="/dashboard/artists" component={AddArtists} />
			<Route path="/dashboard/artist/*" component={EditArtist} />
		</Router>
	);
}

export default App;
