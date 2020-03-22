import gql from "graphql-tag";
import * as React from "react";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type AddArtistInput = {
	createdAt: Scalars["String"];
	basicInformation: BasicInformationInput;
	advancedInformation: AdvancedInformationInput;
	socialMediaLinks: SocialMediaInput;
	events: Array<Maybe<EventInput>>;
};

export type AdvancedInformation = {
	__typename?: "AdvancedInformation";
	labels?: Maybe<Array<Maybe<Label>>>;
	rider?: Maybe<Rider>;
	hospitality?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type AdvancedInformationInput = {
	labels: Array<Maybe<LabelInput>>;
	rider: RiderInput;
	hospitality: Array<Maybe<Scalars["String"]>>;
};

export type Artist = {
	__typename?: "Artist";
	id?: Maybe<Scalars["ID"]>;
	createdAt?: Maybe<Scalars["String"]>;
	basicInformation?: Maybe<BasicInformation>;
	advancedInformation?: Maybe<AdvancedInformation>;
	socialMediaLinks?: Maybe<SocialMediaLinks>;
	events?: Maybe<Array<Maybe<Event>>>;
};

export type BasicInformation = {
	__typename?: "BasicInformation";
	name?: Maybe<Scalars["String"]>;
	description?: Maybe<Scalars["String"]>;
	logoUrl?: Maybe<Scalars["String"]>;
	coverImageUrl?: Maybe<Scalars["String"]>;
	profileImageUrl?: Maybe<Scalars["String"]>;
};

export type BasicInformationInput = {
	name: Scalars["String"];
	description: Scalars["String"];
	logoUrl: Scalars["String"];
	coverImageUrl: Scalars["String"];
	profileImageUrl: Scalars["String"];
};

export type EditArtistInput = {
	basicInformation: BasicInformationInput;
	advancedInformation: AdvancedInformationInput;
	socialMediaLinks: SocialMediaInput;
};

export type Event = {
	__typename?: "Event";
	time?: Maybe<EventTime>;
	location?: Maybe<Scalars["String"]>;
	city?: Maybe<Scalars["String"]>;
	facebookEventLink?: Maybe<Scalars["String"]>;
	residentAdvisorLink?: Maybe<Scalars["String"]>;
};

export type EventInput = {
	time?: Maybe<EventTimeInput>;
	location?: Maybe<Scalars["String"]>;
	city?: Maybe<Scalars["String"]>;
	facebookEventLink?: Maybe<Scalars["String"]>;
	residentAdvisorLink?: Maybe<Scalars["String"]>;
};

export type EventTime = {
	__typename?: "EventTime";
	start?: Maybe<Scalars["String"]>;
	end?: Maybe<Scalars["String"]>;
};

export type EventTimeInput = {
	start?: Maybe<Scalars["String"]>;
	end?: Maybe<Scalars["String"]>;
};

export type Label = {
	__typename?: "Label";
	logoUrl?: Maybe<Scalars["String"]>;
	link?: Maybe<Scalars["String"]>;
};

export type LabelInput = {
	logoUrl?: Maybe<Scalars["String"]>;
	link?: Maybe<Scalars["String"]>;
};

export type Mutation = {
	__typename?: "Mutation";
	addArtist?: Maybe<Artist>;
	updateArtist?: Maybe<Artist>;
	deleteArtist?: Maybe<Artist>;
	login?: Maybe<User>;
};

export type MutationAddArtistArgs = {
	artist: AddArtistInput;
};

export type MutationUpdateArtistArgs = {
	id?: Maybe<Scalars["ID"]>;
	artist: EditArtistInput;
};

export type MutationDeleteArtistArgs = {
	id?: Maybe<Scalars["ID"]>;
};

export type MutationLoginArgs = {
	email: Scalars["String"];
	password: Scalars["String"];
};

export type Rider = {
	__typename?: "Rider";
	equipment?: Maybe<Array<Maybe<Scalars["String"]>>>;
	equipmentImageUrl?: Maybe<Scalars["String"]>;
};

export type RiderInput = {
	equipment?: Maybe<Array<Maybe<Scalars["String"]>>>;
	equipmentImageUrl?: Maybe<Scalars["String"]>;
};

export type RootQueryType = {
	__typename?: "RootQueryType";
	artist?: Maybe<Artist>;
	artists?: Maybe<Array<Maybe<Artist>>>;
	me?: Maybe<User>;
};

export type RootQueryTypeArtistArgs = {
	id: Scalars["ID"];
};

export type RootQueryTypeMeArgs = {
	email: Scalars["String"];
	password: Scalars["String"];
};

export type SocialMediaInput = {
	facebook: Scalars["String"];
	instagram: Scalars["String"];
	soundCloud: Scalars["String"];
	beatport: Scalars["String"];
	residentAdvisor: Scalars["String"];
};

export type SocialMediaLinks = {
	__typename?: "SocialMediaLinks";
	facebook?: Maybe<Scalars["String"]>;
	instagram?: Maybe<Scalars["String"]>;
	soundCloud?: Maybe<Scalars["String"]>;
	beatport?: Maybe<Scalars["String"]>;
	residentAdvisor?: Maybe<Scalars["String"]>;
};

export type User = {
	__typename?: "User";
	email?: Maybe<Scalars["String"]>;
	token?: Maybe<Scalars["String"]>;
};

export type ArtistsQueryVariables = {};

export type ArtistsQuery = { __typename?: "RootQueryType" } & {
	artists: Maybe<
		Array<
			Maybe<
				{ __typename?: "Artist" } & Pick<Artist, "id" | "createdAt"> & {
						basicInformation: Maybe<
							{ __typename?: "BasicInformation" } & Pick<
								BasicInformation,
								"name"
							>
						>;
					}
			>
		>
	>;
};

export type AddArtistMutationVariables = {
	artist: AddArtistInput;
};

export type AddArtistMutation = { __typename?: "Mutation" } & {
	addArtist: Maybe<
		{ __typename?: "Artist" } & Pick<Artist, "id" | "createdAt"> & {
				basicInformation: Maybe<
					{ __typename?: "BasicInformation" } & Pick<BasicInformation, "name">
				>;
			}
	>;
};

export type ArtistQueryVariables = {
	id: Scalars["ID"];
};

export type ArtistQuery = { __typename?: "RootQueryType" } & {
	artist: Maybe<
		{ __typename?: "Artist" } & Pick<Artist, "id" | "createdAt"> & {
				basicInformation: Maybe<
					{ __typename?: "BasicInformation" } & Pick<
						BasicInformation,
						| "name"
						| "description"
						| "logoUrl"
						| "coverImageUrl"
						| "profileImageUrl"
					>
				>;
				advancedInformation: Maybe<
					{ __typename?: "AdvancedInformation" } & Pick<
						AdvancedInformation,
						"hospitality"
					> & {
							labels: Maybe<
								Array<
									Maybe<
										{ __typename?: "Label" } & Pick<Label, "logoUrl" | "link">
									>
								>
							>;
							rider: Maybe<
								{ __typename?: "Rider" } & Pick<
									Rider,
									"equipment" | "equipmentImageUrl"
								>
							>;
						}
				>;
				socialMediaLinks: Maybe<
					{ __typename?: "SocialMediaLinks" } & Pick<
						SocialMediaLinks,
						| "facebook"
						| "instagram"
						| "soundCloud"
						| "beatport"
						| "residentAdvisor"
					>
				>;
				events: Maybe<
					Array<
						Maybe<
							{ __typename?: "Event" } & Pick<Event, "location"> & {
									time: Maybe<
										{ __typename?: "EventTime" } & Pick<
											EventTime,
											"start" | "end"
										>
									>;
								}
						>
					>
				>;
			}
	>;
};

export type UpdateArtistMutationVariables = {
	id: Scalars["ID"];
	artist: EditArtistInput;
};

export type UpdateArtistMutation = { __typename?: "Mutation" } & {
	updateArtist: Maybe<
		{ __typename?: "Artist" } & Pick<Artist, "id"> & {
				basicInformation: Maybe<
					{ __typename?: "BasicInformation" } & Pick<BasicInformation, "name">
				>;
			}
	>;
};

export type DeleteArtistMutationVariables = {
	id: Scalars["ID"];
};

export type DeleteArtistMutation = { __typename?: "Mutation" } & {
	deleteArtist: Maybe<
		{ __typename?: "Artist" } & Pick<Artist, "id"> & {
				basicInformation: Maybe<
					{ __typename?: "BasicInformation" } & Pick<BasicInformation, "name">
				>;
			}
	>;
};

export type LoginMutationVariables = {
	email: Scalars["String"];
	password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
	login: Maybe<{ __typename?: "User" } & Pick<User, "token">>;
};

export const ArtistsDocument = gql`
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
export type ArtistsComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<
		ArtistsQuery,
		ArtistsQueryVariables
	>,
	"query"
>;

export const ArtistsComponent = (props: ArtistsComponentProps) => (
	<ApolloReactComponents.Query<ArtistsQuery, ArtistsQueryVariables>
		query={ArtistsDocument}
		{...props}
	/>
);

export type ArtistsProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	ArtistsQuery,
	ArtistsQueryVariables
> &
	TChildProps;
export function withArtists<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		ArtistsQuery,
		ArtistsQueryVariables,
		ArtistsProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		ArtistsQuery,
		ArtistsQueryVariables,
		ArtistsProps<TChildProps>
	>(ArtistsDocument, {
		alias: "artists",
		...operationOptions
	});
}

export function useArtistsQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		ArtistsQuery,
		ArtistsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<ArtistsQuery, ArtistsQueryVariables>(
		ArtistsDocument,
		baseOptions
	);
}
export function useArtistsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ArtistsQuery,
		ArtistsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<ArtistsQuery, ArtistsQueryVariables>(
		ArtistsDocument,
		baseOptions
	);
}

export type ArtistsQueryHookResult = ReturnType<typeof useArtistsQuery>;
export type ArtistsQueryResult = ApolloReactCommon.QueryResult<
	ArtistsQuery,
	ArtistsQueryVariables
>;
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
export type AddArtistMutationFn = ApolloReactCommon.MutationFunction<
	AddArtistMutation,
	AddArtistMutationVariables
>;
export type AddArtistComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<
		AddArtistMutation,
		AddArtistMutationVariables
	>,
	"mutation"
>;

export const AddArtistComponent = (props: AddArtistComponentProps) => (
	<ApolloReactComponents.Mutation<AddArtistMutation, AddArtistMutationVariables>
		mutation={AddArtistDocument}
		{...props}
	/>
);

export type AddArtistProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	AddArtistMutation,
	AddArtistMutationVariables
> &
	TChildProps;
export function withAddArtist<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		AddArtistMutation,
		AddArtistMutationVariables,
		AddArtistProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		AddArtistMutation,
		AddArtistMutationVariables,
		AddArtistProps<TChildProps>
	>(AddArtistDocument, {
		alias: "addArtist",
		...operationOptions
	});
}

export function useAddArtistMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		AddArtistMutation,
		AddArtistMutationVariables
	>
) {
	return ApolloReactHooks.useMutation<
		AddArtistMutation,
		AddArtistMutationVariables
	>(AddArtistDocument, baseOptions);
}
export type AddArtistMutationHookResult = ReturnType<
	typeof useAddArtistMutation
>;
export type AddArtistMutationResult = ApolloReactCommon.MutationResult<
	AddArtistMutation
>;
export type AddArtistMutationOptions = ApolloReactCommon.BaseMutationOptions<
	AddArtistMutation,
	AddArtistMutationVariables
>;
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
export type ArtistComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<
		ArtistQuery,
		ArtistQueryVariables
	>,
	"query"
> &
	({ variables: ArtistQueryVariables; skip?: boolean } | { skip: boolean });

export const ArtistComponent = (props: ArtistComponentProps) => (
	<ApolloReactComponents.Query<ArtistQuery, ArtistQueryVariables>
		query={ArtistDocument}
		{...props}
	/>
);

export type ArtistProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	ArtistQuery,
	ArtistQueryVariables
> &
	TChildProps;
export function withArtist<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		ArtistQuery,
		ArtistQueryVariables,
		ArtistProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		ArtistQuery,
		ArtistQueryVariables,
		ArtistProps<TChildProps>
	>(ArtistDocument, {
		alias: "artist",
		...operationOptions
	});
}

export function useArtistQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		ArtistQuery,
		ArtistQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<ArtistQuery, ArtistQueryVariables>(
		ArtistDocument,
		baseOptions
	);
}
export function useArtistLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ArtistQuery,
		ArtistQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<ArtistQuery, ArtistQueryVariables>(
		ArtistDocument,
		baseOptions
	);
}

export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>;
export type ArtistQueryResult = ApolloReactCommon.QueryResult<
	ArtistQuery,
	ArtistQueryVariables
>;
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
export type UpdateArtistMutationFn = ApolloReactCommon.MutationFunction<
	UpdateArtistMutation,
	UpdateArtistMutationVariables
>;
export type UpdateArtistComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<
		UpdateArtistMutation,
		UpdateArtistMutationVariables
	>,
	"mutation"
>;

export const UpdateArtistComponent = (props: UpdateArtistComponentProps) => (
	<ApolloReactComponents.Mutation<
		UpdateArtistMutation,
		UpdateArtistMutationVariables
	>
		mutation={UpdateArtistDocument}
		{...props}
	/>
);

export type UpdateArtistProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	UpdateArtistMutation,
	UpdateArtistMutationVariables
> &
	TChildProps;
export function withUpdateArtist<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UpdateArtistMutation,
		UpdateArtistMutationVariables,
		UpdateArtistProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		UpdateArtistMutation,
		UpdateArtistMutationVariables,
		UpdateArtistProps<TChildProps>
	>(UpdateArtistDocument, {
		alias: "updateArtist",
		...operationOptions
	});
}

export function useUpdateArtistMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		UpdateArtistMutation,
		UpdateArtistMutationVariables
	>
) {
	return ApolloReactHooks.useMutation<
		UpdateArtistMutation,
		UpdateArtistMutationVariables
	>(UpdateArtistDocument, baseOptions);
}
export type UpdateArtistMutationHookResult = ReturnType<
	typeof useUpdateArtistMutation
>;
export type UpdateArtistMutationResult = ApolloReactCommon.MutationResult<
	UpdateArtistMutation
>;
export type UpdateArtistMutationOptions = ApolloReactCommon.BaseMutationOptions<
	UpdateArtistMutation,
	UpdateArtistMutationVariables
>;
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
export type DeleteArtistMutationFn = ApolloReactCommon.MutationFunction<
	DeleteArtistMutation,
	DeleteArtistMutationVariables
>;
export type DeleteArtistComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<
		DeleteArtistMutation,
		DeleteArtistMutationVariables
	>,
	"mutation"
>;

export const DeleteArtistComponent = (props: DeleteArtistComponentProps) => (
	<ApolloReactComponents.Mutation<
		DeleteArtistMutation,
		DeleteArtistMutationVariables
	>
		mutation={DeleteArtistDocument}
		{...props}
	/>
);

export type DeleteArtistProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	DeleteArtistMutation,
	DeleteArtistMutationVariables
> &
	TChildProps;
export function withDeleteArtist<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DeleteArtistMutation,
		DeleteArtistMutationVariables,
		DeleteArtistProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		DeleteArtistMutation,
		DeleteArtistMutationVariables,
		DeleteArtistProps<TChildProps>
	>(DeleteArtistDocument, {
		alias: "deleteArtist",
		...operationOptions
	});
}

export function useDeleteArtistMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		DeleteArtistMutation,
		DeleteArtistMutationVariables
	>
) {
	return ApolloReactHooks.useMutation<
		DeleteArtistMutation,
		DeleteArtistMutationVariables
	>(DeleteArtistDocument, baseOptions);
}
export type DeleteArtistMutationHookResult = ReturnType<
	typeof useDeleteArtistMutation
>;
export type DeleteArtistMutationResult = ApolloReactCommon.MutationResult<
	DeleteArtistMutation
>;
export type DeleteArtistMutationOptions = ApolloReactCommon.BaseMutationOptions<
	DeleteArtistMutation,
	DeleteArtistMutationVariables
>;
export const LoginDocument = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
	LoginMutation,
	LoginMutationVariables
>;
export type LoginComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<
		LoginMutation,
		LoginMutationVariables
	>,
	"mutation"
>;

export const LoginComponent = (props: LoginComponentProps) => (
	<ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables>
		mutation={LoginDocument}
		{...props}
	/>
);

export type LoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	LoginMutation,
	LoginMutationVariables
> &
	TChildProps;
export function withLogin<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		LoginMutation,
		LoginMutationVariables,
		LoginProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		LoginMutation,
		LoginMutationVariables,
		LoginProps<TChildProps>
	>(LoginDocument, {
		alias: "login",
		...operationOptions
	});
}

export function useLoginMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		LoginMutation,
		LoginMutationVariables
	>
) {
	return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
		LoginDocument,
		baseOptions
	);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<
	LoginMutation
>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
	LoginMutation,
	LoginMutationVariables
>;
