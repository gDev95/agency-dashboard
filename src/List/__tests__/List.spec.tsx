import React from "react";
import { render, getByTestId, fireEvent } from "@testing-library/react";

import List from "../List";
import { BrowserRouter } from "react-router-dom";

describe("List", () => {
	const fakeProps: any = {
		items: [
			{
				id: "1",
				primaryText: "More important",
				secondaryText: "less important"
			}
		],
		subheader: "string",
		onDelete: (id: string) => {},
		path: "something"
	};
	it("should be rendering children if passed", () => {
		const { container } = render(
			<BrowserRouter>
				<List
					{...fakeProps}
					children={<h3 data-testid="childrenTest">Children tested</h3>}
				/>
			</BrowserRouter>
		);

		const children = getByTestId(container, "childrenTest");

		expect(children.textContent).toBe("Children tested");
	});

	it("shoud display message if no items were passed", () => {
		fakeProps.items = [];
		const { container } = render(
			<BrowserRouter>
				<List {...fakeProps} />
			</BrowserRouter>
		);

		const emptyListMessage = getByTestId(container, "emptyListMessage");
		expect(emptyListMessage.textContent).toBe("No something added yet");
	});
});
