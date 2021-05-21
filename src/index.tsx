import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import { client } from "./apollo/client";
import { store } from "./store";
import { theme } from "./theme";

import "./base.css";

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </ApolloProvider>,
    document.getElementById("root")
);
