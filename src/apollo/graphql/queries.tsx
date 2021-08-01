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

export const GET_ALL_NEWS = gql`
    query News {
        news {
            id
            createdAt
            title
        }
    }
`;

export const GET_NEWS = gql`
    query NewsPost($id: ID!) {
        newsPost(id: $id) {
            id
            createdAt
            title
            imageUrl
            externalLink
            videoLink
        }
    }
`;

export const GET_PAGE_CONTENT = gql`
    query PageContent($id: ID!) {
        pageContent(id: $id) {
            slogan {
                en
                es
            }
            mission {
                en
                es
            }
            socialMedia {
                facebook
                instagram
                soundCloud
            }
            contactDetails {
                email
                phone
            }
        }
    }
`;
