import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddArtistInput = {
  createdAt: Scalars['String'];
  basicInformation: BasicInformationInput;
  advancedInformation: AdvancedInformationInput;
  socialMediaLinks?: Maybe<SocialMediaInput>;
  events: Array<Maybe<EventInput>>;
};

export type AdvancedInformation = {
  __typename?: 'AdvancedInformation';
  labels?: Maybe<Array<Maybe<Label>>>;
  setup?: Maybe<Setup>;
  hospitality?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AdvancedInformationInput = {
  labels: Array<Maybe<LabelInput>>;
  setup: SetupInput;
  hospitality: Array<Maybe<Scalars['String']>>;
};

export type Artist = {
  __typename?: 'Artist';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
  basicInformation?: Maybe<BasicInformation>;
  advancedInformation?: Maybe<AdvancedInformation>;
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  events?: Maybe<Array<Maybe<Event>>>;
};

export type BasicInformation = {
  __typename?: 'BasicInformation';
  name: Scalars['String'];
  description: Scalars['String'];
  logoUrl: Scalars['String'];
  coverImageUrl: Scalars['String'];
  profileImageUrl: Scalars['String'];
  isDraft: Scalars['Boolean'];
};

export type BasicInformationInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  logoUrl: Scalars['String'];
  coverImageUrl: Scalars['String'];
  profileImageUrl: Scalars['String'];
  isDraft: Scalars['Boolean'];
};

export type ContactDetails = {
  __typename?: 'ContactDetails';
  email: Scalars['String'];
  phone: Scalars['String'];
};

export type ContactDetailsInput = {
  email: Scalars['String'];
  phone: Scalars['String'];
};

export type Content = {
  __typename?: 'Content';
  en: Scalars['String'];
  es: Scalars['String'];
};

export type ContentInput = {
  en: Scalars['String'];
  es: Scalars['String'];
};

export type EditArtistInput = {
  basicInformation: BasicInformationInput;
  advancedInformation: AdvancedInformationInput;
  socialMediaLinks?: Maybe<SocialMediaInput>;
};

export type Event = {
  __typename?: 'Event';
  time?: Maybe<EventTime>;
  location?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  facebookEventLink?: Maybe<Scalars['String']>;
  residentAdvisorLink?: Maybe<Scalars['String']>;
};

export type EventInput = {
  time?: Maybe<EventTimeInput>;
  location?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  facebookEventLink?: Maybe<Scalars['String']>;
  residentAdvisorLink?: Maybe<Scalars['String']>;
};

export type EventTime = {
  __typename?: 'EventTime';
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
};

export type EventTimeInput = {
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
};

export type Label = {
  __typename?: 'Label';
  logoUrl?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type LabelInput = {
  logoUrl?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArtist?: Maybe<Artist>;
  updateArtist?: Maybe<Artist>;
  deleteArtist?: Maybe<Artist>;
  initializePageContent?: Maybe<PageContent>;
  updatePageContent?: Maybe<PageContent>;
  login?: Maybe<User>;
};


export type MutationAddArtistArgs = {
  artist: AddArtistInput;
};


export type MutationUpdateArtistArgs = {
  id: Scalars['ID'];
  artist: EditArtistInput;
};


export type MutationDeleteArtistArgs = {
  id: Scalars['ID'];
};


export type MutationUpdatePageContentArgs = {
  id: Scalars['ID'];
  pageContent: PageContentInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PageContent = {
  __typename?: 'PageContent';
  lastModified: Scalars['String'];
  slogan: Content;
  mission: Content;
  socialMedia: PageContentSocialMedia;
  contactDetails: ContactDetails;
};

export type PageContentInput = {
  lastModified: Scalars['String'];
  slogan: ContentInput;
  mission: ContentInput;
  socialMedia: PageContentSocialMediaInput;
  contactDetails: ContactDetailsInput;
};

export type PageContentSocialMedia = {
  __typename?: 'PageContentSocialMedia';
  facebook: Scalars['String'];
  instagram: Scalars['String'];
  soundCloud: Scalars['String'];
};

export type PageContentSocialMediaInput = {
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  soundCloud?: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  artist?: Maybe<Artist>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  me?: Maybe<User>;
  pageContent?: Maybe<PageContent>;
};


export type RootQueryTypeArtistArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeArtistsArgs = {
  isDraft?: Maybe<Scalars['Boolean']>;
};


export type RootQueryTypeMeArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type RootQueryTypePageContentArgs = {
  id: Scalars['ID'];
};

export type Setup = {
  __typename?: 'Setup';
  equipment?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipmentImageUrl?: Maybe<Scalars['String']>;
};

export type SetupInput = {
  equipment?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipmentImageUrl?: Maybe<Scalars['String']>;
};

export type SocialMediaInput = {
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  soundCloud?: Maybe<Scalars['String']>;
  beatport?: Maybe<Scalars['String']>;
  residentAdvisor?: Maybe<Scalars['String']>;
};

export type SocialMediaLinks = {
  __typename?: 'SocialMediaLinks';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  soundCloud?: Maybe<Scalars['String']>;
  beatport?: Maybe<Scalars['String']>;
  residentAdvisor?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type AddArtistMutationVariables = Exact<{
  artist: AddArtistInput;
}>;


export type AddArtistMutation = (
  { __typename?: 'Mutation' }
  & { addArtist?: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id' | 'createdAt'>
    & { basicInformation?: Maybe<(
      { __typename?: 'BasicInformation' }
      & Pick<BasicInformation, 'name'>
    )> }
  )> }
);

export type UpdateArtistMutationVariables = Exact<{
  id: Scalars['ID'];
  artist: EditArtistInput;
}>;


export type UpdateArtistMutation = (
  { __typename?: 'Mutation' }
  & { updateArtist?: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id'>
    & { basicInformation?: Maybe<(
      { __typename?: 'BasicInformation' }
      & Pick<BasicInformation, 'name'>
    )> }
  )> }
);

export type DeleteArtistMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteArtistMutation = (
  { __typename?: 'Mutation' }
  & { deleteArtist?: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id'>
    & { basicInformation?: Maybe<(
      { __typename?: 'BasicInformation' }
      & Pick<BasicInformation, 'name'>
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'token'>
  )> }
);

export type UpdatePageContentMutationVariables = Exact<{
  id: Scalars['ID'];
  pageContent: PageContentInput;
}>;


export type UpdatePageContentMutation = (
  { __typename?: 'Mutation' }
  & { updatePageContent?: Maybe<(
    { __typename?: 'PageContent' }
    & Pick<PageContent, 'lastModified'>
  )> }
);

export type InitializePageContentMutationVariables = Exact<{ [key: string]: never; }>;


export type InitializePageContentMutation = (
  { __typename?: 'Mutation' }
  & { initializePageContent?: Maybe<(
    { __typename?: 'PageContent' }
    & Pick<PageContent, 'lastModified'>
  )> }
);

export type ArtistsQueryVariables = Exact<{
  isDraft?: Maybe<Scalars['Boolean']>;
}>;


export type ArtistsQuery = (
  { __typename?: 'RootQueryType' }
  & { artists?: Maybe<Array<Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id' | 'createdAt'>
    & { basicInformation?: Maybe<(
      { __typename?: 'BasicInformation' }
      & Pick<BasicInformation, 'name'>
    )> }
  )>>> }
);

export type ArtistQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ArtistQuery = (
  { __typename?: 'RootQueryType' }
  & { artist?: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id' | 'createdAt'>
    & { basicInformation?: Maybe<(
      { __typename?: 'BasicInformation' }
      & Pick<BasicInformation, 'name' | 'description' | 'logoUrl' | 'coverImageUrl' | 'profileImageUrl' | 'isDraft'>
    )>, advancedInformation?: Maybe<(
      { __typename?: 'AdvancedInformation' }
      & Pick<AdvancedInformation, 'hospitality'>
      & { labels?: Maybe<Array<Maybe<(
        { __typename?: 'Label' }
        & Pick<Label, 'logoUrl' | 'link'>
      )>>>, setup?: Maybe<(
        { __typename?: 'Setup' }
        & Pick<Setup, 'equipment' | 'equipmentImageUrl'>
      )> }
    )>, socialMediaLinks?: Maybe<(
      { __typename?: 'SocialMediaLinks' }
      & Pick<SocialMediaLinks, 'facebook' | 'instagram' | 'soundCloud' | 'beatport' | 'residentAdvisor'>
    )>, events?: Maybe<Array<Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'location'>
      & { time?: Maybe<(
        { __typename?: 'EventTime' }
        & Pick<EventTime, 'start' | 'end'>
      )> }
    )>>> }
  )> }
);

export type PageContentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PageContentQuery = (
  { __typename?: 'RootQueryType' }
  & { pageContent?: Maybe<(
    { __typename?: 'PageContent' }
    & { slogan: (
      { __typename?: 'Content' }
      & Pick<Content, 'en' | 'es'>
    ), mission: (
      { __typename?: 'Content' }
      & Pick<Content, 'en' | 'es'>
    ), socialMedia: (
      { __typename?: 'PageContentSocialMedia' }
      & Pick<PageContentSocialMedia, 'facebook' | 'instagram' | 'soundCloud'>
    ), contactDetails: (
      { __typename?: 'ContactDetails' }
      & Pick<ContactDetails, 'email' | 'phone'>
    ) }
  )> }
);


export const AddArtistDocument = gql`
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
export type AddArtistMutationFn = Apollo.MutationFunction<AddArtistMutation, AddArtistMutationVariables>;

/**
 * __useAddArtistMutation__
 *
 * To run a mutation, you first call `useAddArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArtistMutation, { data, loading, error }] = useAddArtistMutation({
 *   variables: {
 *      artist: // value for 'artist'
 *   },
 * });
 */
export function useAddArtistMutation(baseOptions?: Apollo.MutationHookOptions<AddArtistMutation, AddArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddArtistMutation, AddArtistMutationVariables>(AddArtistDocument, options);
      }
export type AddArtistMutationHookResult = ReturnType<typeof useAddArtistMutation>;
export type AddArtistMutationResult = Apollo.MutationResult<AddArtistMutation>;
export type AddArtistMutationOptions = Apollo.BaseMutationOptions<AddArtistMutation, AddArtistMutationVariables>;
export const UpdateArtistDocument = gql`
    mutation updateArtist($id: ID!, $artist: EditArtistInput!) {
  updateArtist(id: $id, artist: $artist) {
    id
    basicInformation {
      name
    }
  }
}
    `;
export type UpdateArtistMutationFn = Apollo.MutationFunction<UpdateArtistMutation, UpdateArtistMutationVariables>;

/**
 * __useUpdateArtistMutation__
 *
 * To run a mutation, you first call `useUpdateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArtistMutation, { data, loading, error }] = useUpdateArtistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      artist: // value for 'artist'
 *   },
 * });
 */
export function useUpdateArtistMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArtistMutation, UpdateArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArtistMutation, UpdateArtistMutationVariables>(UpdateArtistDocument, options);
      }
export type UpdateArtistMutationHookResult = ReturnType<typeof useUpdateArtistMutation>;
export type UpdateArtistMutationResult = Apollo.MutationResult<UpdateArtistMutation>;
export type UpdateArtistMutationOptions = Apollo.BaseMutationOptions<UpdateArtistMutation, UpdateArtistMutationVariables>;
export const DeleteArtistDocument = gql`
    mutation deleteArtist($id: ID!) {
  deleteArtist(id: $id) {
    id
    basicInformation {
      name
    }
  }
}
    `;
export type DeleteArtistMutationFn = Apollo.MutationFunction<DeleteArtistMutation, DeleteArtistMutationVariables>;

/**
 * __useDeleteArtistMutation__
 *
 * To run a mutation, you first call `useDeleteArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArtistMutation, { data, loading, error }] = useDeleteArtistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArtistMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArtistMutation, DeleteArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArtistMutation, DeleteArtistMutationVariables>(DeleteArtistDocument, options);
      }
export type DeleteArtistMutationHookResult = ReturnType<typeof useDeleteArtistMutation>;
export type DeleteArtistMutationResult = Apollo.MutationResult<DeleteArtistMutation>;
export type DeleteArtistMutationOptions = Apollo.BaseMutationOptions<DeleteArtistMutation, DeleteArtistMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdatePageContentDocument = gql`
    mutation updatePageContent($id: ID!, $pageContent: PageContentInput!) {
  updatePageContent(id: $id, pageContent: $pageContent) {
    lastModified
  }
}
    `;
export type UpdatePageContentMutationFn = Apollo.MutationFunction<UpdatePageContentMutation, UpdatePageContentMutationVariables>;

/**
 * __useUpdatePageContentMutation__
 *
 * To run a mutation, you first call `useUpdatePageContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageContentMutation, { data, loading, error }] = useUpdatePageContentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pageContent: // value for 'pageContent'
 *   },
 * });
 */
export function useUpdatePageContentMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageContentMutation, UpdatePageContentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePageContentMutation, UpdatePageContentMutationVariables>(UpdatePageContentDocument, options);
      }
export type UpdatePageContentMutationHookResult = ReturnType<typeof useUpdatePageContentMutation>;
export type UpdatePageContentMutationResult = Apollo.MutationResult<UpdatePageContentMutation>;
export type UpdatePageContentMutationOptions = Apollo.BaseMutationOptions<UpdatePageContentMutation, UpdatePageContentMutationVariables>;
export const InitializePageContentDocument = gql`
    mutation initializePageContent {
  initializePageContent {
    lastModified
  }
}
    `;
export type InitializePageContentMutationFn = Apollo.MutationFunction<InitializePageContentMutation, InitializePageContentMutationVariables>;

/**
 * __useInitializePageContentMutation__
 *
 * To run a mutation, you first call `useInitializePageContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitializePageContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initializePageContentMutation, { data, loading, error }] = useInitializePageContentMutation({
 *   variables: {
 *   },
 * });
 */
export function useInitializePageContentMutation(baseOptions?: Apollo.MutationHookOptions<InitializePageContentMutation, InitializePageContentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InitializePageContentMutation, InitializePageContentMutationVariables>(InitializePageContentDocument, options);
      }
export type InitializePageContentMutationHookResult = ReturnType<typeof useInitializePageContentMutation>;
export type InitializePageContentMutationResult = Apollo.MutationResult<InitializePageContentMutation>;
export type InitializePageContentMutationOptions = Apollo.BaseMutationOptions<InitializePageContentMutation, InitializePageContentMutationVariables>;
export const ArtistsDocument = gql`
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

/**
 * __useArtistsQuery__
 *
 * To run a query within a React component, call `useArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistsQuery({
 *   variables: {
 *      isDraft: // value for 'isDraft'
 *   },
 * });
 */
export function useArtistsQuery(baseOptions?: Apollo.QueryHookOptions<ArtistsQuery, ArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArtistsQuery, ArtistsQueryVariables>(ArtistsDocument, options);
      }
export function useArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArtistsQuery, ArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArtistsQuery, ArtistsQueryVariables>(ArtistsDocument, options);
        }
export type ArtistsQueryHookResult = ReturnType<typeof useArtistsQuery>;
export type ArtistsLazyQueryHookResult = ReturnType<typeof useArtistsLazyQuery>;
export type ArtistsQueryResult = Apollo.QueryResult<ArtistsQuery, ArtistsQueryVariables>;
export const ArtistDocument = gql`
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

/**
 * __useArtistQuery__
 *
 * To run a query within a React component, call `useArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArtistQuery(baseOptions: Apollo.QueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
      }
export function useArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
        }
export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>;
export type ArtistLazyQueryHookResult = ReturnType<typeof useArtistLazyQuery>;
export type ArtistQueryResult = Apollo.QueryResult<ArtistQuery, ArtistQueryVariables>;
export const PageContentDocument = gql`
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

/**
 * __usePageContentQuery__
 *
 * To run a query within a React component, call `usePageContentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageContentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePageContentQuery(baseOptions: Apollo.QueryHookOptions<PageContentQuery, PageContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageContentQuery, PageContentQueryVariables>(PageContentDocument, options);
      }
export function usePageContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageContentQuery, PageContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageContentQuery, PageContentQueryVariables>(PageContentDocument, options);
        }
export type PageContentQueryHookResult = ReturnType<typeof usePageContentQuery>;
export type PageContentLazyQueryHookResult = ReturnType<typeof usePageContentLazyQuery>;
export type PageContentQueryResult = Apollo.QueryResult<PageContentQuery, PageContentQueryVariables>;