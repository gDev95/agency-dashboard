import expect from 'expect';

import { ArtistFormInformation } from './artist-information.model';

describe('ArtistInformation', () => {
  describe('when creating an instance', () => {
    it('property objects should not contain __typename', () => {
      const fakeArtist = {
        basicInformation: {
          name: 'Paul The Tester',
          hometown: 'Berlin',
          description: 'This is a test description',
          profileImageUrl: 'something',
          __typename: 'basicInformation',
        },
        advancedInformation: {
          labels: [
            {
              logoUrl: 'something',
              link: 'link-to-label.com',
              __typename: 'labels',
            },
          ],
          setup: {
            equipment: ['Some stuff'],
            equipmentImageUrl: 'something',
            __typename: 'setup',
          },
          hospitality: ['drinks'],
          __typename: 'advancedInformation',
        },
        socialMediaLinks: {
          facebook: 'facebook.com',
          beatport: 'beatport.com',
          instagram: 'instagram.com',
          soundCloud: 'soundcloud.com',
          residentAdvisor: 'residentadvisor.com',
          __typename: 'SocialMediaLinks',
        },
        events: [],
      };
      expect(
        new ArtistFormInformation(
          fakeArtist.basicInformation,
          fakeArtist.advancedInformation,
          fakeArtist.socialMediaLinks,
          fakeArtist.events,
        ),
      ).toEqual({
        basicInformation: {
          name: 'Paul The Tester',
          hometown: 'Berlin',
          description: 'This is a test description',
          profileImageUrl: 'something',
        },
        advancedInformation: {
          labels: [
            {
              logoUrl: 'something',
              link: 'link-to-label.com',
            },
          ],
          setup: {
            equipment: ['Some stuff'],
            equipmentImageUrl: 'something',
          },
          hospitality: ['drinks'],
        },
        socialMediaLinks: {
          facebook: 'facebook.com',
          beatport: 'beatport.com',
          instagram: 'instagram.com',
          soundCloud: 'soundcloud.com',
          residentAdvisor: 'residentadvisor.com',
        },
        events: [],
      });
    });
  });
});
