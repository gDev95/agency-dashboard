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

export const PAGE_CONTENT = gql`
    query PageContent {
        pageContent {
            mission {
                en
                es
            }
            slogan {
                en
                es
            }
            socialMedia {
                facebook
                instagram
                soundcloud
            }
        }
    }
`;
