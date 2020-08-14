import React, { useState } from "react";
import { Grid, Paper, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import moment from "moment";
import { useDispatch } from "react-redux";

import { useArtistsQuery, useAddArtistMutation } from "../generated/graphql";
import { List, GridContainer } from "../ui";
import { ListItemExtractor } from "../helper";

import { ArtistForm } from "./form";
import { addArtistStartAction, addArtistErrorAction } from "./actions";
import { ArtistBasicInformation, ArtistAdvancedInformation, SocialMediaLinks } from "./artist.model";

export const AddArtists = () => {
    const { data, refetch } = useArtistsQuery();
    const [addArtist] = useAddArtistMutation();
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);

    const artistItems = data && data.artists && ListItemExtractor.getArtistItems(data);

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
            events
        };

        try {
            dispatch(addArtistStartAction());
            await addArtist({
                variables: { artist: newArtist }
            });
            refetch();
        } catch (error) {
            dispatch(addArtistErrorAction());
            setOpen(true);
        }
    };

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    return (
        <GridContainer container={true} direction="row" justify="space-around" alignItems="flex-start" wrap="wrap">
            <Grid item={true} xs={12} md={5}>
                <Paper>
                    <ArtistForm submitButtonLabel="Add Artist" onFormSubmit={handleSubmitForm} />
                </Paper>
            </Grid>
            <Grid item={true} xs={12} md={6}>
                <Paper>
                    <List items={artistItems} subheader="Latest Artist" path="artist" label="artists" />
                </Paper>
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
                message={<span id="message-id">Could not add Artist, please try again.</span>}
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </GridContainer>
    );
};
