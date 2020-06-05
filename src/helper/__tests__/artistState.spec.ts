import React from "react";
import { ArtistStateKeyHelper } from "../artistState";

describe("ArtistStateKeyHelper", () => {
	describe("when getting the key of Artist state by index", () => {
		it("returns basicInformation by index 0", () => {
			const key = ArtistStateKeyHelper.getKeyByIndex(0);
			expect(key).toBe("basicInformation");
		});
		it("returns advancedInformation by index 1", () => {
			const key = ArtistStateKeyHelper.getKeyByIndex(1);
			expect(key).toBe("advancedInformation");
		});
		it("returns socialMediaLinks  if index is greater than 1", () => {
			const key = ArtistStateKeyHelper.getKeyByIndex(2);
			expect(key).toBe("socialMediaLinks");
		});
	});
});
