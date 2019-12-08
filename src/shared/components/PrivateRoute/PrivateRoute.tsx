import React, { Component } from "react";
import { Redirect, Route, RouteProps } from "react-router";

interface Props extends RouteProps {
	isAuthenticated: boolean;
}

const PrivateRoute = ({
	component,
	isAuthenticated = false,
	...otherProps
}: Props) => {
	const routeComponent = (props: any) =>
		isAuthenticated ? (
			<Component {...props} />
		) : (
			<Redirect to={{ pathname: "/login" }} />
		);
	return <Route {...otherProps} render={routeComponent} />;
};

export default PrivateRoute;
