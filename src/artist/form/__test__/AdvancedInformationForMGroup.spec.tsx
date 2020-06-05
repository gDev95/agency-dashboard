import React from "react";
import { Label, Rider } from "../../../../../artist/Artist.model";
import AdvancedInformatioFormGroup from "../advanced";
import { render, getByDisplayValue } from "@testing-library/react";

interface Props {
	labels: Label[];
	rider: Rider;
	hospitality: string[];
	formErrors: Set<string>;
	onChange(property: string, value: any): void;
}

describe("AdvancedInformationFormGroup", () => {
	const fakeProps: Props = {
		labels: [{ logoUrl: "http://image.com", link: "www.test.com" }],
		rider: {
			equipment: ["speakers"],
			equipmentImageUrl: "http://image.com"
		},
		hospitality: ["free drinks"],
		formErrors: new Set(),
		onChange: () => {}
	};

	describe("when passing labels, rider and hospitality with no error", () => {
		it("sets the values in form accordingly", () => {
			const { container } = render(
				<AdvancedInformatioFormGroup {...fakeProps} />
			);
			const labelLink = getByDisplayValue(container, "www.test.com");

			expect(labelLink).toBeTruthy();
		});
	});
});
