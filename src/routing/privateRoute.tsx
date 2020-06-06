import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

interface Props extends RouteProps {
	isAuthenticated: boolean;
}

export const PrivateRoute = ({
	component: Component,
	isAuthenticated = false,
	...otherProps
}: Props) => (
	<Route
		{...otherProps}
		render={(props: any) =>
			isAuthenticated ? (
				// @ts-ignore
				<Component {...props} {...otherProps} />
			) : (
				<Redirect
					to={{ pathname: "/login", state: { from: props.location } }}
				/>
			)
		}
	/>
);
