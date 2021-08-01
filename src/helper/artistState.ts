export class ArtistStateKeyHelper {
  public static getKeyByIndex(index: number): 'basicInformation' | 'advancedInformation' | 'socialMediaLinks' {
    if (index === 0) {
      return 'basicInformation';
    } else if (index === 1) {
      return 'advancedInformation';
    } else {
      return 'socialMediaLinks';
    }
  }
}
