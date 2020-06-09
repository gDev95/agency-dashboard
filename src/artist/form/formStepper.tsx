import React, { useMemo, useState } from "react";
import {
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Emoji } from "../../ui";
import { ErrorText } from "./styled";
import { BasicInformationForm } from "./basic";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const FinishedStepWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
`;

function getSteps() {
	return ["Basic", "Advanced", "Social Media"];
}

interface Props {
	submitButtonLabel: string;
	hasReset: boolean;
	handleFormSubmit: () => unknown;
}

export default function FormStepper(props: Props) {
	const steps = getSteps();
	const [step, setActiveStep] = useState<number>(0);
	const { handleFormSubmit, submitButtonLabel, hasReset } = props;

	const handleNext = () => {
		setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const error = useSelector((state: AppState) => state.artist.error);

	const FormStep = useMemo(() => {
		switch (step) {
			case 0:
				return BasicInformationForm;
			default:
				throw new Error("This step does not exist");
		}
	}, [step]);

	return (
		<div>
			<Stepper activeStep={step}>
				{steps.map((label, index) => {
					const stepProps: { completed?: boolean } = {};
					const labelProps: { optional?: React.ReactNode } = {};

					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<div>
				{step === steps.length ? (
					<div>
						{error ? (
							<FinishedStepWrapper>
								<ErrorText>
									Something went wrong while updating the artist
								</ErrorText>
								<Emoji label="crying-face" symbol={"😭"} size={50} />
							</FinishedStepWrapper>
						) : (
							<FinishedStepWrapper>
								<Typography>
									All steps completed - you&apos;re finished
								</Typography>
								<Emoji label="rocket" symbol={"🚀"} size={50} />
							</FinishedStepWrapper>
						)}
						{hasReset ? (
							<Button onClick={handleReset}>Reset</Button>
						) : (
							<>
								<Button onClick={handleBack}>Back</Button>
								<Link to="/">
									<Button>Go to Dashboard</Button>
								</Link>
							</>
						)}
					</div>
				) : (
					<div>
						<FormStep handleNext={handleNext} handleBack={handleBack} />
					</div>
				)}
			</div>
		</div>
	);
}
