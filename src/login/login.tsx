import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Typography, Button, Container, Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import styled from "styled-components";

import { selectIsLoggingIn, selectErrorsInAuthentication } from "../selectors/selectors";
import { useLoginMutation } from "../generated/graphql";
import { LoadingIndicator } from "../ui";
import FormValidator from "../helper/formValidator";

import { authenticationStartAction, authenticationFailureAction, authenticationSuccessAction } from "./actions";

const LoginContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoginPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 300px;
    height: 230px;
`;

interface Credentials {
    email: string;
    password: string;
    [key: string]: string;
}

const INITIAL_CREDENTIALS = {
    email: "",
    password: ""
};

export const LoginPage = () => {
    const [credentials, setCredentials] = useState<Credentials>(INITIAL_CREDENTIALS);
    const history = useHistory();
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
            history.push("/");
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

    const handleOnChange = (primaryProperty: keyof Credentials) => (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCredentials({
            ...credentials,
            [primaryProperty]: event.target.value
        });
    };

    return (
        <LoginContainer maxWidth="sm">
            <LoginPaper>
                {isLoading ? (
                    <LoadingIndicator />
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
                            helperText={(formErrors.has("email") || !!authenticationError) && "Please enter a valid email"}
                            error={formErrors.has("email") || !!authenticationError}
                        />
                        <TextField
                            type="password"
                            margin="normal"
                            placeholder="Password"
                            fullWidth={true}
                            helperText={(formErrors.has("password") || !!authenticationError) && "Please enter a valid password"}
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
