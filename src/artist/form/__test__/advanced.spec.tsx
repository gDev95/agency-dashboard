import React from "react";
import { Label, Setup } from "../../artist.model";

import { render, getByDisplayValue } from "@testing-library/react";
import { AdvancedInformatioFormGroup } from "../advanced";

interface Props {
	labels: Label[];
	setup: Setup;
	hospitality: string[];
	formErrors: Set<string>;
	onChange(property: string, value: any): void;
}

describe("AdvancedInformationFormGroup", () => {
	const fakeProps: Props = {
		labels: [{ logoUrl: "http://image.com", link: "www.test.com" }],
		setup: {
			equipment: ["speakers"],
			equipmentImageUrl: "http://image.com",
		},
		hospitality: ["free drinks"],
		formErrors: new Set(),
		onChange: () => {},
	};

	describe("when passing labels, setup and hospitality with no error", () => {
		it("sets the values in form accordingly", () => {
			const { container } = render(
				<AdvancedInformatioFormGroup {...fakeProps} />
			);
			const labelLink = getByDisplayValue(container, "www.test.com");

			expect(labelLink).toBeTruthy();
		});
	});
});
