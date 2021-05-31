import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Snackbar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";

import { AddArtists, EditArtist } from "./artist";
import { Dashboard } from "./dashboard";
import { AddNews } from "./news";
import { deleteNotificationAction, selectNotification } from "./notifications";

const StyledAppTitle = styled(Typography)`
    flex-grow: 1;
`;

function App() {
    // const isAuthenticated = useSelector(selectIsAuthenticated);

    // const renderAppRoutes = () => (
    //     <>
    //         <Route exact={true} path="/login" component={LoginPage} />
    //         <PrivateRoute isAuthenticated={isAuthenticated} exact={true} path="/" component={Dashboard} />
    //         <PrivateRoute isAuthenticated={isAuthenticated} path="/artists" component={AddArtists} />
    //         {/* <PrivateRoute
    // 			isAuthenticated={isAuthenticated}
    // 			path="/artist/:id"
    // 			component={EditArtist}
    // 		/> */}
    //     </>
    // );

    // const renderNavButton = () => (
    //     <>
    //         {isAuthenticated && (
    //             <Button href="/" color="inherit">
    //                 Dashboard
    //             </Button>
    //         )}
    //         <Button color="inherit">Login</Button>
    //     </>
    // );
    const dispatch = useDispatch();
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(deleteNotificationAction());
    };
    const notification = useSelector(selectNotification);
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
            <Route path="/artist/:id" component={EditArtist} />
            <Route exact={true} path="/news" component={AddNews} />
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={notification.showNotification}
                autoHideDuration={10000}
                onClose={handleClose}
                ContentProps={{
                    "aria-describedby": "message-id",
                }}
                message={<span id="message-id">{notification.message}</span>}
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </Router>
    );
}

export default App;
