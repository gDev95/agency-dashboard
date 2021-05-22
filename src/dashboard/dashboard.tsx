import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListItemIcon, Grid, Typography, IconButton, Snackbar, Fab, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AccountCirlceIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";

import { useArtistsQuery, useDeleteArtistMutation } from "../generated/graphql";
import { LoadingIndicator, List, GridContainer, Emoji } from "../ui";
import { ListItemExtractor } from "../helper";
import { PageContentForm } from "../pageContent/pageContentForm";
import { deleteNotificationAction, selectNotification, showNotificationAction } from "../notifications";

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

const PageContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
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
    const { loading, data: artistData, error, refetch } = useArtistsQuery();
    const [deleteArtist] = useDeleteArtistMutation();
    const dispatch = useDispatch();
    const notification = useSelector(selectNotification);
    const artistItems = artistData && artistData.artists && ListItemExtractor.getArtistItems(artistData);

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
                } catch (err) {
                    dispatch(showNotificationAction("Deleting Artist failed, please try again"));
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

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(deleteNotificationAction());
    };

    return (
        <GridContainer {...props} container={true} direction="row" justify="space-around" alignItems="flex-start" wrap="wrap">
            <Grid item={true} xs={12} md={5}>
                <DashboardPaper>
                    <List items={artistItems} subheader="Artists" onDelete={handleDelete("ARTIST")} path="artist" label="artists">
                        <ListItemIcon>
                            <AccountCirlceIcon />
                        </ListItemIcon>
                    </List>

                    <Link to="/artists">
                        <AddFab color="secondary" aria-label="add">
                            <AddIcon />
                        </AddFab>
                    </Link>
                </DashboardPaper>
            </Grid>
            <Grid item={true} xs={12} md={5}>
                <DashboardPaper>
                    <PageContentWrapper>
                        <h2>Page Content Settings</h2>
                        <PageContentForm />
                    </PageContentWrapper>
                </DashboardPaper>
            </Grid>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={notification.showNotification}
                autoHideDuration={10000}
                onClose={handleClose}
                ContentProps={{
                    "aria-describedby": "message-id",
                }}
                message={<span id="message-id">{notification.message}</span>}
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </GridContainer>
    );
};
