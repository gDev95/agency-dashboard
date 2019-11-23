import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ErrorText from "../ArtistForm/styled-components/ErrorText";
import Emoji from "../Emoji/Emoji";
import FinishedStepWrapper from "./styled-components/FinishedStepWrapper";

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
		error
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
								<Emoji label="rocket" symbol={"😭"} size={50} />
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
								<Link to="/dashboard">
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
