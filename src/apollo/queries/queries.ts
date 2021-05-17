import gql from "graphql-tag";

export const GET_ARTIST_LIST = gql`
    query Artists($isDraft: Boolean) {
        artists(isDraft: $isDraft) {
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
                isDraft
            }
            advancedInformation {
                labels {
                    logoUrl
                    link
                }
                setup {
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

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;
