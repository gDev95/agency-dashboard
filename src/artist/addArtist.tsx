import React, { useState } from "react";
import { Grid, Paper, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { useArtistsQuery, useAddArtistMutation } from "../generated/graphql";

import moment from "moment";
import {
	ArtistBasicInformation,
	ArtistAdvancedInformation,
	SocialMediaLinks,
} from "./artist.model";
import { List, GridContainer } from "../ui";
import { ArtistForm } from "./form";
import { ListItemExtractor } from "../helper";

export const AddArtists = () => {
	console.log("I am being rendered");
	const { data, refetch } = useArtistsQuery();
	const [addArtist] = useAddArtistMutation();

	const [open, setOpen] = useState<boolean>(false);

	const artistItems =
		data && data.artists && ListItemExtractor.getArtistItems(data);

	const handleSubmitForm = async (
		basicInformation: ArtistBasicInformation,
		advancedInformation: ArtistAdvancedInformation,
		socialMediaLinks: SocialMediaLinks
	) => {
		const createdAt = moment().format("YYYY-MM-DD");
		const events: any = [];
		const newArtist = {
			createdAt,
			basicInformation,
			advancedInformation,
			socialMediaLinks,
			events,
		};

		try {
			await addArtist({
				variables: { artist: newArtist },
			});
			refetch();
		} catch (error) {
			setOpen(true);
			console.error("Something went wrong", error);
		}
	};

	const handleClose = (
		event: React.SyntheticEvent | React.MouseEvent,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
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
						submitButtonLabel="Add Artist"
						onFormSubmit={handleSubmitForm}
					/>
				</Paper>
			</Grid>
			<Grid item={true} xs={12} md={6}>
				<Paper>
					<List items={artistItems} subheader="Latest Artist" path="artist" />
				</Paper>
			</Grid>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				open={open}
				autoHideDuration={10000}
				onClose={handleClose}
				ContentProps={{
					"aria-describedby": "message-id",
				}}
				message={
					<span id="message-id">Could not add Artist, please try again.</span>
				}
				action={[
					<IconButton
						key="close"
						aria-label="close"
						color="inherit"
						onClick={handleClose}
					>
						<CloseIcon />
					</IconButton>,
				]}
			/>
		</GridContainer>
	);
};
