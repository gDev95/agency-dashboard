import React from "react";
import { render } from "@testing-library/react";
import LoadingComponent from "../LoadingComponent";

describe("Loading Component", () => {
	it("should render without crashing", () => {
		const { container } = render(<LoadingComponent />);
		expect(container).toBeTruthy();
	});
});
