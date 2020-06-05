import { ArtistFormInformationFactory } from "../artistFormFactory";

describe("ArtistFormInformationFactory", () => {
	describe("when artist is missing necessary information", () => {
		it("should return null", () => {
			const fakeArtist = {
				basicInformation: {
					name: "Paul The Tester",
					hometown: "Berlin",
					description: "This is a test description",
					profileImageUrl: "something",
				},

				events: [],
			};
			const artist = ArtistFormInformationFactory.create({ ...fakeArtist });
			expect(artist).not.toBeTruthy();
		});
	});

	describe("when called", () => {
		it("should return artistInformation", () => {
			const fakeArtist = {
				basicInformation: {
					name: "Paul The Tester",
					hometown: "Berlin",
					description: "This is a test description",
					profileImageUrl: "something",
					logoUrl: "something",
					coverImageUrl: "something",
					__typename: "typename",
				},
				advancedInformation: {
					labels: [
						{
							logoUrl: "something",
							link: "link-to-label.com",
							__typename: "typename",
						},
					],
					rider: {
						equipment: ["Some stuff"],
						equipmentImageUrl: "something",
						__typename: "typename",
					},
					hospitality: ["drinks"],
				},
				socialMediaLinks: {
					facebook: "facebook.com",
					beatport: "beatport.com",
					instagram: "instagram.com",
					soundCloud: "soundcloud.com",
					residentAdvisor: "residentadvisor.com",
					__typename: "typename",
				},
				events: [],
			};
			const artist = ArtistFormInformationFactory.create({ ...fakeArtist });
			expect(artist).toEqual({
				basicInformation: {
					name: "Paul The Tester",
					hometown: "Berlin",
					description: "This is a test description",
					profileImageUrl: "something",
					logoUrl: "something",
					coverImageUrl: "something",
				},
				advancedInformation: {
					labels: [
						{
							logoUrl: "something",
							link: "link-to-label.com",
						},
					],
					rider: {
						equipment: ["Some stuff"],
						equipmentImageUrl: "something",
					},
					hospitality: ["drinks"],
				},
				socialMediaLinks: {
					facebook: "facebook.com",
					beatport: "beatport.com",
					instagram: "instagram.com",
					soundCloud: "soundcloud.com",
					residentAdvisor: "residentadvisor.com",
				},
				events: [],
			});
		});
	});
});
