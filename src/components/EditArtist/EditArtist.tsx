import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";

import {
	ArtistBasicInformation,
	SocialMediaLinks,
	ArtistAdvancedInformation
} from "../../shared/models/Artist/Artist.model";
import List from "../../shared/components/List/List";
import ArtistForm from "../../shared/components/ArtistForm/ArtistForm";
import GridContainer from "../../shared/styled-components/GridContainer";
import {
	useArtistQuery,
	useUpdateArtistMutation
} from "../../generated/graphql";

import { withRouter } from "react-router";
import { ArtistFormInformationFactory } from "../../shared/helper/ArtistFormInformationFactory/artist-form-information.factory";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";

const EditArtist = (props: any) => {
	const artistId = props.match.params[0];

	const { data, loading, refetch } = useArtistQuery({
		variables: { id: artistId }
	});

	const [updateArtist] = useUpdateArtistMutation();

	const [error, setErrorFlag] = useState<boolean>(false);
	const artist =
		data && data.artist && ArtistFormInformationFactory.create(data.artist);

	if (loading) {
		return <LoadingComponent />;
	}
	if (!artist) {
		return <h3>Not Found</h3>;
	}

	const handleSubmitForm = async (
		basicInformation: ArtistBasicInformation,
		advancedInformation: ArtistAdvancedInformation,
		socialMediaLinks: SocialMediaLinks
	) => {
		const updatedArtist = {
			basicInformation,
			advancedInformation,
			socialMediaLinks
		};

		try {
			await updateArtist({
				variables: { id: artistId, artist: updatedArtist }
			});
			refetch();
		} catch (error) {
			setErrorFlag(true);
			console.error("Something went wrong", error);
		}
	};

	// TODO: Display Artist Events
	return (
		<GridContainer
			container={true}
			direction="row"
			justify="space-around"
			alignItems="flex-start"
			wrap="wrap"
			spacing={3}
		>
			<Grid item={true} xs={12} md={5}>
				<Paper>
					<ArtistForm
						submitButtonLabel="Update Artist"
						onFormSubmit={handleSubmitForm}
						basicInformation={artist.basicInformation}
						advancedInformation={artist.advancedInformation}
						socialMediaLinks={artist.socialMediaLinks}
						hasReset={false}
						error={error}
					/>
				</Paper>
			</Grid>
			<Grid item={true} xs={12} md={6}>
				<Paper>
					<List items={[]} subheader="Events" path="events/" />
				</Paper>
			</Grid>
		</GridContainer>
	);
};

export default withRouter(EditArtist);
