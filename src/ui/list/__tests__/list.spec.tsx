import React from "react";
import { render, getByText } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { List } from "../list";

describe("List", () => {
	const fakeProps: any = {
		items: [
			{
				id: "1",
				primaryText: "More important",
				secondaryText: "less important",
			},
		],
		subheader: "string",
		onDelete: (id: string) => {},
		path: "something",
		label: "fakeItems",
	};
	it("should be rendering children if passed", () => {
		const { container } = render(
			<BrowserRouter>
				<List {...fakeProps} children={<h3>Children tested</h3>} />
			</BrowserRouter>
		);

		getByText(container, "Children tested");
	});

	it("shoud display message if no items were passed", () => {
		const { container } = render(
			<BrowserRouter>
				<List {...fakeProps} items={[]} />
			</BrowserRouter>
		);

		getByText(container, "No fakeItems added yet");
	});
});
