import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Typography, Button } from "@material-ui/core";

import FormValidator from "../../shared/helper/FormValidator.helper";
import {
	authenticationStartAction,
	authenticationFailureAction,
	authenticationSuccessAction
} from "../../shared/actions/actions";
import {
	selectIsLoggingIn,
	selectErrorsInAuthentication
} from "../../shared/selectors/selectors";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";

import LoginContainer from "./styled-components/LoginContainer";
import LoginPaper from "./styled-components/LoginPaper";
import { useLoginMutation } from "../../generated/graphql";
import { withRouter } from "react-router";

interface Credentials {
	email: string;
	password: string;
	[key: string]: string;
}

const INITIAL_CREDENTIALS = {
	email: "",
	password: ""
};

const Login = (props: any) => {
	const [credentials, setCredentials] = useState<Credentials>(
		INITIAL_CREDENTIALS
	);
	const isLoading = useSelector(selectIsLoggingIn);
	const authenticationError = useSelector(selectErrorsInAuthentication);
	const [formErrors, setFormErrors] = useState<Set<string>>(new Set());
	const dispatch = useDispatch();
	const validator = new FormValidator();
	const [login] = useLoginMutation();

	const logIn = async () => {
		const { email, password } = credentials;

		dispatch(authenticationStartAction());

		try {
			const response = await login({
				variables: { email, password }
			});

			if (response && response.errors && response.errors.length > 0) {
				throw new Error(response.errors[0].message);
			}

			dispatch(authenticationSuccessAction());
			props.history.push("/");
		} catch (error) {
			dispatch(authenticationFailureAction(error));
		}
	};

	const submitForm = (): void => {
		Object.keys(credentials).forEach((key: string) => {
			validator.errors = formErrors;
			validator.validate(key, credentials[key]);
			setFormErrors(new Set(validator.errors));
		});

		validator.errors.size < 1 && logIn();
	};

	const handleOnChange = (primaryProperty: keyof Credentials) => (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setCredentials({
			...credentials,
			[primaryProperty]: event.target.value
		});
	};

	return (
		<LoginContainer maxWidth="sm">
			<LoginPaper>
				{isLoading ? (
					<LoadingComponent />
				) : (
					<>
						<Typography variant="h6" gutterBottom={true}>
							Login
						</Typography>
						<TextField
							type="email"
							margin="normal"
							placeholder="Email"
							fullWidth={true}
							onChange={handleOnChange("email")}
							helperText={
								(formErrors.has("email") || !!authenticationError) &&
								"Please enter a valid email"
							}
							error={formErrors.has("email") || !!authenticationError}
						/>
						<TextField
							type="password"
							margin="normal"
							placeholder="Password"
							fullWidth={true}
							helperText={
								(formErrors.has("password") || !!authenticationError) &&
								"Please enter a valid password"
							}
							onChange={handleOnChange("password")}
							error={formErrors.has("password") || !!authenticationError}
						/>
						<Button variant="contained" color="primary" onClick={submitForm}>
							Login
						</Button>
					</>
				)}
			</LoginPaper>
		</LoginContainer>
	);
};

export default withRouter(Login);
