import React, { useMemo, useState } from "react";
import { Grid, Paper, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LoadingIndicator, GridContainer, List } from "../ui";
import { useArtistQuery, useUpdateArtistMutation } from "../generated/graphql";
import { ArtistFormInformationFactory } from "../helper";

import { ArtistBasicInformation, ArtistAdvancedInformation, SocialMediaLinks } from "./artist.model";
import { ArtistForm } from "./form";
import { addArtistErrorAction, addArtistFinishAction, resetUploadedImagesAction } from "./actions";

export const EditArtist = () => {
    const { id: artistId } = useParams<{ id: string }>();
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { data, loading } = useArtistQuery({
        variables: { id: artistId },
    });

    const [updateArtist] = useUpdateArtistMutation();

    const artist = useMemo(() => data && data.artist && ArtistFormInformationFactory.create(data.artist), [data]);

    if (loading) {
        return <LoadingIndicator />;
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
            socialMediaLinks,
        };

        try {
            await updateArtist({
                variables: { id: artistId, artist: updatedArtist },
            });
            dispatch(addArtistFinishAction());
            dispatch(resetUploadedImagesAction());
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
    // TODO: Display Artist Events
    return (
        <GridContainer container={true} direction="row" justify="space-around" alignItems="flex-start" wrap="wrap" spacing={3}>
            <Grid item={true} xs={12} md={5}>
                <Paper>
                    <ArtistForm
                        submitButtonLabel="Add Artist"
                        basicInformation={artist.basicInformation}
                        advancedInformation={artist.advancedInformation}
                        socialMediaLinks={artist.socialMediaLinks}
                        onFormSubmit={handleSubmitForm}
                    />
                </Paper>
            </Grid>
            <Grid item={true} xs={12} md={6}>
                <Paper>
                    <List items={[]} subheader="Events" path="events/" label="events" />
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
                message={<span id="message-id">Could not edit Artist, please try again.</span>}
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </GridContainer>
    );
};
