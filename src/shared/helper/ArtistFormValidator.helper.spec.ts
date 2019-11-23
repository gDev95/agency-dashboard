import ArtistFormValidator from "./ArtistFormValidator.helper";

describe("ArtistFormValidator", () => {
	// my typescript config does not allow objects whose methods are called to be null
	let validator: any;

	beforeEach(() => {
		validator = new ArtistFormValidator();
	});
	afterEach(() => {
		validator = null;
	});
	describe("when validate is called", () => {
		describe("and value is a string", () => {
			describe("and the string is empty", () => {
				it("adds the key in error set ", () => {
					validator.validate("label", "");
					expect(validator.errors.has("label")).toBe(true);
				});
			});
			describe("which was previously empty but now it is not", () => {
				it("removes the key from error set", () => {
					const fakeErrors = new Set().add("label");
					validator.errors = fakeErrors;
					validator.validate("label", "Valid String");
					expect(validator.errors.has("label")).toBe(false);
				});
			});
		});
		describe("and value is an array", () => {
			describe("and the array is empty", () => {
				it("adds the key in error set ", () => {
					validator.validate("emptyArray", []);
					expect(validator.errors.has("emptyArray")).toBe(true);
				});
			});
			describe("and it contains objects with invalid values", () => {
				it("add the key of the array to error set", () => {
					const fakeArray = [{ logoUrl: "", link: "" }];
					validator.validate("fakeArray", fakeArray);
					expect(
						validator.errors.has("logoUrl") && validator.errors.has("link")
					).toBe(true);
				});
			});
			describe("which was previously empty but now it is not", () => {
				it("removes the key from error set", () => {
					const fakeErrors = new Set().add("emptyArray");
					validator.errors = fakeErrors;
					validator.validate("emptyArray", ["Item 1"]);
					expect(validator.errors.has("emptyArray")).toBe(false);
				});
			});
		});
		describe("and value is an object", () => {
			describe("and contains an empty string property", () => {
				describe("and an empty array property", () => {
					it("adds both keys to set ", () => {
						const fakeObject = { emptyString: "", emptyArray: "" };
						validator.validate("Object", fakeObject);
						expect(
							validator.errors.has("emptyArray") &&
								validator.errors.has("emptyString")
						).toBe(true);
					});
				});
			});
		});
	});
});
