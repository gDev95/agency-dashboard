import { ArtistListItem } from '../artist';
import { NewsListItem } from '../news/news.model';

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
  public static getNewsItems(data: any) {
    return data.news.map((news: NewsListItem) => {
      return {
        id: news.id,
        primaryText: news.title,
        secondaryText: news.createdAt,
      };
    });
  }
}
