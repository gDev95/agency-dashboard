import { ArtistFormInformation } from "../artist";

export class ArtistFormInformationFactory {
	public static create(data: any): ArtistFormInformation | null {
		if (
			!data.basicInformation ||
			!data.advancedInformation ||
			!data.socialMediaLinks ||
			!data.events
		) {
			return null;
		}
		const {
			basicInformation,
			advancedInformation,
			socialMediaLinks,
			events,
		} = data;
		const artistFormInformation = new ArtistFormInformation(
			basicInformation,
			advancedInformation,
			socialMediaLinks,
			events
		);

		return artistFormInformation;
	}
}
