import React from "react";
import { CircularProgress } from "@material-ui/core";
import LoadingWrapper from "./styled-components/LoadingWrapper";

const LoadingComponent = () => {
	return (
		<LoadingWrapper>
			<CircularProgress />
		</LoadingWrapper>
	);
};

export default LoadingComponent;
