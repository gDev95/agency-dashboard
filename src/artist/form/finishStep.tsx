import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { reset } from "redux-form";

import { AppState } from "../../store";
import { Emoji } from "../../ui";

import { ErrorText } from "./styled";

/*
Despite this might having a positive impact for the end user,
 this component was a emergency solution to allow the latest, if unchanged, values of the Social media form
 to be present when submitting.

 Ideally we should have 1 form with sections.
*/

const FinishedStepWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

interface Props {
    hasReset: boolean;
    handleReset: () => void;
    handleBack: () => void;
}

export function FinishFormStep({ hasReset, handleReset, handleBack }: Props) {
    const dispatch = useDispatch();
    const error = useSelector((state: AppState) => state.artist.error);
    return (
        <FinishedStepWrapper>
            {error ? (
                <>
                    <ErrorText>Something went wrong while updating the artist</ErrorText>
                    <Emoji label="crying-face" symbol={"😭"} size={50} />
                </>
            ) : (
                <>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Emoji label="rocket" symbol={"🚀"} size={50} />
                </>
            )}
            {hasReset ? (
                <Button onClick={handleReset}>Reset</Button>
            ) : (
                <>
                    <Button onClick={handleBack}>Back</Button>
                    <Link to="/">
                        <Button
                            onClick={() => {
                                dispatch(reset("basicInformation"));
                                dispatch(reset("advancedInformation"));
                                dispatch(reset("socialMedia"));
                            }}
                        >
                            Go to Dashboard
                        </Button>
                    </Link>
                </>
            )}
        </FinishedStepWrapper>
    );
}
