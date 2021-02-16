import { ArtistListItem } from "../artist";

export class ListItemExtractor {
    public static getArtistItems(data: any) {
        return data.artists.map((artist: ArtistListItem) => {
            return {
                id: artist.id,
                primaryText: artist.basicInformation.name,
                secondaryText: artist.createdAt,
            };
        });
    }
}
