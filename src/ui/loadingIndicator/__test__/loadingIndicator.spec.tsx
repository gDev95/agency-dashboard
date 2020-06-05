import React from "react";
import { render } from "@testing-library/react";

import { LoadingIndicator } from "../loadingIndicator";

describe("Loading Component", () => {
	it("should render without crashing", () => {
		const { container } = render(<LoadingIndicator />);
		expect(container).toBeTruthy();
	});
});
