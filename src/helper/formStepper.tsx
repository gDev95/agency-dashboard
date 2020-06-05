import React from "react";
import {
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Emoji } from "../ui";
import ErrorText from "../artist/form/styled/ErrorText";

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
	formComponents: any[];
	submitButtonLabel: string;
	disableButton: boolean;
	step: number;
	hasReset: boolean;
	error?: boolean;
	handleNext(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
	handleBack(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
	handleReset(): void;
	handleFormSubmit(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void;
}

export default function FormStepper(props: Props) {
	const steps = getSteps();

	const {
		formComponents,
		handleFormSubmit,
		submitButtonLabel,
		step,
		handleBack,
		handleNext,
		handleReset,
		disableButton,
		hasReset,
		error,
	} = props;

	const getStepContent = (currentStep: number) => {
		switch (currentStep) {
			case 0:
				return formComponents[currentStep];
			case 1:
				return formComponents[currentStep];
			case 2:
				return formComponents[currentStep];
			default:
				return "Unknown step";
		}
	};

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
						{getStepContent(step)}
						<div>
							<Button disabled={step === 0} onClick={handleBack}>
								Back
							</Button>

							<Button
								variant="contained"
								color="primary"
								disabled={disableButton}
								onClick={
									step === steps.length - 1 ? handleFormSubmit : handleNext
								}
							>
								{step === steps.length - 1 ? submitButtonLabel : "Next"}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
