import {
	ArtistBasicInformation,
	Events,
	SocialMediaLinks,
	ArtistAdvancedInformation
} from "../Artist/Artist.model";
import { isArray } from "util";

interface ArtistFormInformationInterface {
	basicInformation: ArtistBasicInformation;
	advancedInformation: ArtistAdvancedInformation;
	socialMediaLinks: SocialMediaLinks;
	events: Events;
}

export class ArtistFormInformation implements ArtistFormInformationInterface {
	public basicInformation: ArtistBasicInformation;
	public socialMediaLinks: SocialMediaLinks;
	public advancedInformation: ArtistAdvancedInformation;
	public events: Events;
	constructor(
		basicInformation: any,
		advancedInformation: any,
		socialMediaLinks: any,
		events: any
	) {
		this.basicInformation = this.extractTypenamePropFromObject(
			basicInformation
		);

		this.advancedInformation = this.extractTypenamePropFromObject(
			advancedInformation
		);

		this.socialMediaLinks = this.extractTypenamePropFromObject(
			socialMediaLinks
		);
		this.events = events;
	}

	// Unfortunately when retrieving Artist via query we get a typename property for each object in Artist
	// Since we want to plug in the properties of Artist straight into the form and use the values later for updating
	// the entity we need to remove it otherwise we get error that there were invalid values
	// its really hacky for now I admit
	//  https://github.com/apollographql/apollo-client/issues/1564
	private extractTypenamePropFromObject(object: any) {
		Object.keys(object).forEach(key => {
			if (typeof object[key] === "object") {
				delete object[key].__typename;
			}
			if (isArray(object[key])) {
				object[key].forEach(
					(item: any) => typeof item === "object" && delete item.__typename
				);
			}
		});

		delete object.__typename;
		const newObject = { ...object };

		return newObject;
	}
}
