import React, { useMemo, useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import styled from "styled-components";

import { LoadingIndicator } from "../../ui";
import { ArtistAdvancedInformation, SocialMediaLinks, ArtistBasicInformation } from "../artist.model";

import { BasicInformationForm } from "./basic";
import { AdvancedInformationForm } from "./advanced";
import { SocialMediaForm } from "./socialMedia";
import { FinishFormStep } from "./finishStep";
import { FormSummary } from "./formSummary";

const StyledStepper = styled(Stepper)`
    /* this seems necessary to force the overwride*/
    padding: 0 !important;
    padding-bottom: 15px !important;
`;

function getSteps() {
    return ["Basic", "Advanced", "Social Media"];
}

interface Props {
    basicInformation?: ArtistBasicInformation;
    advancedInformation?: ArtistAdvancedInformation;
    socialMediaLinks?: SocialMediaLinks;
    submitButtonLabel: string;
    hasReset: boolean;
    handleFormSubmit: (basic: ArtistBasicInformation, advanced: ArtistAdvancedInformation, socialMedia: SocialMediaLinks) => void;
}

export default function FormStepper(props: Props) {
    const steps = getSteps();
    const [step, setActiveStep] = useState<number>(0);
    const { handleFormSubmit, submitButtonLabel, hasReset, basicInformation, advancedInformation, socialMediaLinks } = props;

    const formStep = useMemo(() => {
        const handleNext = () => {
            if (step !== steps.length - 1) {
                setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
            } else {
                setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
            }
        };

        const handleBack = () => {
            setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
        };

        const handleReset = () => {
            setActiveStep(0);
        };
        switch (step) {
            case 0:
                return <BasicInformationForm basicInformation={basicInformation} handleNext={handleNext} handleBack={handleBack} />;
            case 1:
                return (
                    <AdvancedInformationForm advancedInformation={advancedInformation} handleNext={handleNext} handleBack={handleBack} />
                );
            case 2:
                return <SocialMediaForm socialMediaLinks={socialMediaLinks} handleNext={handleNext} handleBack={handleBack} />;
            case 3:
                return (
                    <FormSummary
                        handleNext={handleNext}
                        handleSubmit={handleFormSubmit}
                        handleBack={handleBack}
                        submitButtonLabel={submitButtonLabel}
                    />
                );
            case 4:
                return <FinishFormStep hasReset={hasReset} handleReset={handleReset} handleBack={handleBack} />;
            default:
                return <LoadingIndicator />;
        }
    }, [step, steps.length, basicInformation, advancedInformation, socialMediaLinks, hasReset, submitButtonLabel, handleFormSubmit]);

    return (
        <div>
            <StyledStepper activeStep={step}>
                {steps.map((label) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: { optional?: React.ReactNode } = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </StyledStepper>
            <div>
                <div>{formStep}</div>
            </div>
        </div>
    );
}
