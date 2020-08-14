import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

export function createTestStore(reducers: any) {
    return createStore(combineReducers(reducers));
}

export function renderWithStore(component: any, store: any) {
    return <Provider store={store}>{component}</Provider>;
}
