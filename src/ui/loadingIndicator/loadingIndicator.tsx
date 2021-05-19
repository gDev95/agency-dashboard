import React from "react";
import { CircularProgress } from "@material-ui/core";

import LoadingWrapper from "./styled-components/LoadingWrapper";

export const LoadingIndicator = () => {
    return (
        <LoadingWrapper>
            <CircularProgress />
        </LoadingWrapper>
    );
};
