import { renderHook } from "@testing-library/react-hooks";
import { useFormValue } from "../useFormValue";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { createTestStore } from "../../../testing/utils";

let mockedFormState = {};

jest.mock("redux-form", () => ({
	getFormValues: () => mockedFormState,
}));

jest.mock("react-redux", () => {
	const ActualReactRedux = require.requireActual("react-redux");
	return {
		...ActualReactRedux,
		useSelector: jest.fn().mockImplementation(() => {
			return mockedFormState;
		}),
	};
});

describe("useFormValue", () => {
	it("returns the value from field specified", () => {
		mockedFormState = {
			fakeField: "fakeFieldValue",
		};

		const { result } = renderHook(() => useFormValue("fakeForm", "fakeField"));

		expect(result.current).toEqual("fakeFieldValue");
	});

	describe("and value is nested", () => {
		it("returns the deeply nested valkue as expected", () => {
			mockedFormState = {
				fakeField: {
					fakeNestedValue: {
						fakeDeepNestedValue: "fakeFieldValue",
					},
				},
			};

			const { result } = renderHook(() =>
				useFormValue(
					"fakeForm",
					"fakeField.fakeNestedValue.fakeDeepNestedValue",
					true
				)
			);

			expect(result.current).toEqual("fakeFieldValue");
		});
	});
});
