import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
	ListItemIcon,
	Grid,
	Typography,
	IconButton,
	Snackbar
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EventIcon from "@material-ui/icons/Event";
import AccountCirlceIcon from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import CloseIcon from "@material-ui/icons/Close";

import List from "../../shared/components/List/List";
import { postItems, eventItems } from "../../shared/sample-data/items";
import AddFab from "./styled-component/AddFab";
import GridContainer from "../../shared/styled-components/GridContainer";
import {
	useArtistsQuery,
	useDeleteArtistMutation
} from "../../generated/graphql";
import DashboardPaper from "./styled-component/DashboardPaper";
import { ListItemExtractor } from "../../shared/helper/ListItemExtractor/list-item-extractor.helper";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";
import { ItemTypes } from "../../shared/models/ItemTypes/item.types";

const Dashboard = () => {
	const { loading, data, error, refetch } = useArtistsQuery();
	const [deleteArtist] = useDeleteArtistMutation();

	const [open, setOpen] = useState<boolean>(false);
	const artistItems =
		data && data.artists && ListItemExtractor.getArtistItems(data);

	if (error) {
		return <Typography>{error}</Typography>;
	}

	if (loading) {
		return <LoadingComponent />;
	}

	const handleDelete = (type: ItemTypes) => async (id: string) => {
		switch (type) {
			case ItemTypes.Artist:
				try {
					await deleteArtist({
						variables: { id }
					});
				} catch (error) {
					console.error("Something went wrong", error);
					setOpen(true);
				}
				refetch();
				break;
			case ItemTypes.News:
				break;
			case ItemTypes.Events:
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
						onDelete={handleDelete(ItemTypes.Artist)}
						path="artist"
					>
						<ListItemIcon>
							<AccountCirlceIcon />
						</ListItemIcon>
					</List>

					<Link to="/dashboard/artists">
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
						onDelete={handleDelete(ItemTypes.News)}
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
						onDelete={handleDelete(ItemTypes.Events)}
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
					horizontal: "left"
				}}
				open={open}
				autoHideDuration={10000}
				onClose={handleClose}
				ContentProps={{
					"aria-describedby": "message-id"
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
					</IconButton>
				]}
			/>
		</GridContainer>
	);
};

export default Dashboard;
