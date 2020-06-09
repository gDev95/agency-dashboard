import React, { useState } from "react";
// import { Grid, Paper } from "@material-ui/core";

// import { useParams } from "react-router-dom";
// import { LoadingIndicator, GridContainer, List } from "../ui";
// import { useArtistQuery, useUpdateArtistMutation } from "../generated/graphql";
// import { ArtistFormInformationFactory } from "../helper";
// import {
// 	ArtistBasicInformation,
// 	ArtistAdvancedInformation,
// 	SocialMediaLinks,
// } from "./artist.model";

// import { ArtistForm } from "./form";

// export const EditArtist = () => {
// 	const { id: artistId } = useParams<{ id: string }>();

// 	const { data, loading, refetch } = useArtistQuery({
// 		variables: { id: artistId },
// 	});

// 	const [updateArtist] = useUpdateArtistMutation();

// 	const [error, setErrorFlag] = useState<boolean>(false);
// 	const artist =
// 		data && data.artist && ArtistFormInformationFactory.create(data.artist);

// 	if (loading) {
// 		return <LoadingIndicator />;
// 	}
// 	if (!artist) {
// 		return <h3>Not Found</h3>;
// 	}

// 	const handleSubmitForm = async (
// 		basicInformation: ArtistBasicInformation,
// 		advancedInformation: ArtistAdvancedInformation,
// 		socialMediaLinks: SocialMediaLinks
// 	) => {
// 		const updatedArtist = {
// 			basicInformation,
// 			advancedInformation,
// 			socialMediaLinks,
// 		};

// 		try {
// 			await updateArtist({
// 				variables: { id: artistId, artist: updatedArtist },
// 			});
// 			refetch();
// 		} catch (error) {
// 			setErrorFlag(true);
// 			console.error("Something went wrong", error);
// 		}
// 	};

// 	// TODO: Display Artist Events
// 	return (
// 		<GridContainer
// 			container={true}
// 			direction="row"
// 			justify="space-around"
// 			alignItems="flex-start"
// 			wrap="wrap"
// 			spacing={3}
// 		>
// 			<Grid item={true} xs={12} md={5}>
// 				<Paper>
// 					<ArtistForm
// 						submitButtonLabel="Update Artist"
// 						onFormSubmit={handleSubmitForm}
// 						basicInformation={artist.basicInformation}
// 						advancedInformation={artist.advancedInformation}
// 						socialMediaLinks={artist.socialMediaLinks}
// 						hasReset={false}
// 						error={error}
// 					/>
// 				</Paper>
// 			</Grid>
// 			<Grid item={true} xs={12} md={6}>
// 				<Paper>
// 					<List items={[]} subheader="Events" path="events/" label="events" />
// 				</Paper>
// 			</Grid>
// 		</GridContainer>
// 	);
// };
