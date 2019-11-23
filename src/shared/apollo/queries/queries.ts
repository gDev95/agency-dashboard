import gql from "graphql-tag";

export const GET_ARTIST_LIST = gql`
	query Artists {
		artists {
			id
			createdAt
			basicInformation {
				name
			}
		}
	}
`;

export const ADD_ARTIST = gql`
	mutation addArtist($artist: AddArtistInput!) {
		addArtist(artist: $artist) {
			id
			createdAt
			basicInformation {
				name
			}
		}
	}
`;

export const GET_ARTIST = gql`
	query Artist($id: ID!) {
		artist(id: $id) {
			id
			createdAt
			basicInformation {
				name
				description
				logoUrl
				coverImageUrl
				profileImageUrl
			}
			advancedInformation {
				labels {
					logoUrl
					link
				}
				rider {
					equipment
					equipmentImageUrl
				}
				hospitality
			}
			socialMediaLinks {
				facebook
				instagram
				soundCloud
				beatport
				residentAdvisor
			}
			events {
				time {
					start
					end
				}
				location
			}
		}
	}
`;

export const UPDATE_ARTIST = gql`
	mutation updateArtist($id: ID!, $artist: EditArtistInput!) {
		updateArtist(id: $id, artist: $artist) {
			id
			basicInformation {
				name
			}
		}
	}
`;

export const DELETE_ARTIST = gql`
	mutation deleteArtist($id: ID!) {
		deleteArtist(id: $id) {
			id
			basicInformation {
				name
			}
		}
	}
`;
