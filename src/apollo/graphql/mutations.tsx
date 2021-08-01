import gql from 'graphql-tag';

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

export const ADD_NEWS = gql`
  mutation addNews($news: NewsInput!) {
    addNews(news: $news) {
      id
    }
  }
`;

export const UPDATE_NEWS = gql`
  mutation updateNews($id: ID!, $news: NewsInput!) {
    updateNews(id: $id, news: $news) {
      id
    }
  }
`;
export const DELETE_NEWS = gql`
  mutation deleteNews($id: ID!) {
    deleteNews(id: $id) {
      id
      title
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

export const UPDATE_PAGE_CONTENT = gql`
  mutation updatePageContent($id: ID!, $pageContent: PageContentInput!) {
    updatePageContent(id: $id, pageContent: $pageContent) {
      lastModified
    }
  }
`;

export const INITIALIZE_PAGE_CONTENT = gql`
  mutation initializePageContent {
    initializePageContent {
      lastModified
    }
  }
`;
