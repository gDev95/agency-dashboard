import { ArtistBasicInformation, Events, SocialMediaLinks, ArtistAdvancedInformation } from "./artist.model";

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
    constructor(basicInformation: any, advancedInformation: any, socialMediaLinks: any, events: any) {
        this.basicInformation = ArtistFormInformation.stripTypenames(basicInformation);

        this.advancedInformation = ArtistFormInformation.stripTypenames(advancedInformation);

        this.socialMediaLinks = ArtistFormInformation.stripTypenames(socialMediaLinks);
        this.events = events;
    }

    // Unfortunately when retrieving Artist via query we get a typename property for each object in Artist
    // Since we want to plug in the properties of Artist straight into the form and use the values later for updating
    // the entity we need to remove it otherwise we get error that there were invalid values
    // its really hacky for now I admit
    //UPDATE 2021, no longer my solution: https://stackoverflow.com/questions/52873741/apollo-boost-typename-in-query-prevent-new-mutation
    //  https://github.com/apollographql/apollo-client/issues/1564
    private static stripTypenames(value: any): any {
        if (Array.isArray(value)) {
            return value.map(ArtistFormInformation.stripTypenames);
        } else if (value !== null && typeof value === "object") {
            const newObject: any = {};
            for (const property in value) {
                if (property !== "__typename") {
                    newObject[property] = ArtistFormInformation.stripTypenames(value[property]);
                }
            }
            return newObject;
        } else {
            return value;
        }
    }
}
