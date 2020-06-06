import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	ListItemIcon,
	Grid,
	Typography,
	IconButton,
	Snackbar,
	Fab,
	Paper,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EventIcon from "@material-ui/icons/Event";
import AccountCirlceIcon from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import CloseIcon from "@material-ui/icons/Close";

import { postItems, eventItems } from "../sample-data/items";

import { useArtistsQuery, useDeleteArtistMutation } from "../generated/graphql";
import { LoadingIndicator, List, GridContainer, Emoji } from "../ui";
import { ListItemExtractor } from "../helper";

type ItemTypes = "ARTIST" | "NEWS" | "EVENTS";

const AddFab = styled(Fab)`
	position: absolute !important;
	right: -20px;
	bottom: -30px;
	z-index: 1;

	// Breakpoint for Grid xs/md
	@media (max-width: 960px) {
		right: 0;
	}
`;

const DashboardPaper = styled(Paper)`
	position: relative;
	margin-top: 10px;
	margin-bottom: 30px;
	background-color: #fff;
`;

const ErrorWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const StyledError = styled(Typography)`
	color: red;
`;

export const Dashboard = (props: any) => {
	const { loading, data, error, refetch } = useArtistsQuery();
	const [deleteArtist] = useDeleteArtistMutation();

	const [open, setOpen] = useState<boolean>(false);
	const artistItems =
		data && data.artists && ListItemExtractor.getArtistItems(data);

	if (error) {
		return (
			<ErrorWrapper>
				<StyledError>{error.message}</StyledError>
				<Emoji label="crying-face" symbol={"😭"} size={30} />
			</ErrorWrapper>
		);
	}

	if (loading) {
		return <LoadingIndicator />;
	}

	const handleDelete = (type: ItemTypes) => async (id: string) => {
		switch (type) {
			case "ARTIST":
				try {
					await deleteArtist({
						variables: { id },
					});
					refetch();
				} catch (error) {
					console.error("Something went wrong", error);
					setOpen(true);
				}
				break;
			case "NEWS":
				break;
			case "EVENTS":
				break;
			default:
				break;
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
			{...props}
			container={true}
			direction="row"
			justify="space-around"
			alignItems="flex-start"
			wrap="wrap"
		>
			<Grid item={true} xs={12} md={3}>
				<DashboardPaper>
					<List
						items={artistItems}
						subheader="Artists"
						onDelete={handleDelete("ARTIST")}
						path="artist"
					>
						<ListItemIcon>
							<AccountCirlceIcon />
						</ListItemIcon>
					</List>

					<Link to="/artists">
						<AddFab color="primary" aria-label="add">
							<AddIcon />
						</AddFab>
					</Link>
				</DashboardPaper>
			</Grid>
			<Grid item={true} xs={12} md={3}>
				<DashboardPaper>
					<List
						items={postItems}
						subheader="News"
						onDelete={handleDelete("NEWS")}
						path="news"
					>
						<ListItemIcon>
							<MessageIcon />
						</ListItemIcon>
					</List>
					<AddFab color="primary" aria-label="add">
						<AddIcon />
					</AddFab>
				</DashboardPaper>
			</Grid>
			<Grid item={true} xs={12} md={3}>
				<DashboardPaper>
					<List
						items={eventItems}
						subheader="Events"
						onDelete={handleDelete("EVENTS")}
						path="events"
					>
						<ListItemIcon>
							<EventIcon />
						</ListItemIcon>
					</List>
					<AddFab color="primary" aria-label="add">
						<AddIcon />
					</AddFab>
				</DashboardPaper>
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
					<span id="message-id">
						Oops, an error occured deleting an item, reload or try again.
					</span>
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
