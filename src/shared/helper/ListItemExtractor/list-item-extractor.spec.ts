import { ListItemExtractor } from "./list-item-extractor.helper";

describe("List Item Extractor", () => {
	it("should return artist items with id, name, created", () => {
		const data = {
			artists: [
				{
					id: "1",
					createdAt: "2019-11-11",
					basicInformation: { name: "Tester", hometown: "Berlin" }
				}
			]
		};
		const items = ListItemExtractor.getArtistItems(data);
		const expectedItems = [
			{ id: "1", primaryText: "Tester", secondaryText: "2019-11-11" }
		];
		expect(items).toEqual(expectedItems);
	});

	it("should return an empty list if artists in data is empty", () => {
		const data = { artists: [] };

		const items = ListItemExtractor.getArtistItems(data);

		expect(items).toEqual([]);
	});
});
