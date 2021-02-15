import React from "react";
import { Paper } from "@material-ui/core";

import { ArtistBasicInformation, ArtistAdvancedInformation, SocialMediaLinks } from "../artist.model";

import FormStepper from "./formStepper";
import { FormRoot } from "./styled";

interface Props {
    submitButtonLabel: string;
    hasReset?: boolean;
    basicInformation?: ArtistBasicInformation;
    advancedInformation?: ArtistAdvancedInformation;
    socialMediaLinks?: SocialMediaLinks;
    onFormSubmit: (basic: ArtistBasicInformation, advanced: ArtistAdvancedInformation, socialMedia: SocialMediaLinks) => void;
}

export const ArtistForm = (props: Props) => {
    const { submitButtonLabel, hasReset = false, onFormSubmit, basicInformation, advancedInformation, socialMediaLinks } = props;

    return (
        <Paper>
            <FormRoot autoComplete="off">
                <FormStepper
                    hasReset={hasReset}
                    submitButtonLabel={submitButtonLabel}
                    handleFormSubmit={onFormSubmit}
                    basicInformation={basicInformation}
                    advancedInformation={advancedInformation}
                    socialMediaLinks={socialMediaLinks}
                />
            </FormRoot>
        </Paper>
    );
};
