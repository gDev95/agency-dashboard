import React from "react";
import { useForm } from "./useForm";
import {
	ArtistBasicInformation,
	SocialMediaLinks,
	ArtistAdvancedInformation,
} from "../artist.model";
import CheckIcon from "@material-ui/icons/Check";
import { Typography, Button } from "@material-ui/core";
import { ButtonWrapper } from "./styled";
import styled from "styled-components";

interface Props {
	handleSubmit: (
		basic: ArtistBasicInformation,
		advanced: ArtistAdvancedInformation,
		socialMedia: SocialMediaLinks
	) => void;
	handleBack: () => void;
	handleNext: () => void;
	submitButtonLabel: string;
}

const StyledListItem = styled.li`
	text-overflow: ellipsis;
	text-wrap: no-wrap;
	margin: 5px;
`;

export function FormSummary({
	handleSubmit,
	handleBack,
	handleNext,
	submitButtonLabel,
}: Props) {
	const basic: ArtistBasicInformation = useForm("basicInformation");
	const advanced: ArtistAdvancedInformation = useForm("advancedInformation");
	const socialMedia = useForm("socialMedia");

	return (
		<div>
			<div>
				<Typography> Basic Information</Typography>
				<ul>
					<StyledListItem>
						Profile Image <CheckIcon />
					</StyledListItem>
					<StyledListItem>
						Cover Image <CheckIcon />
					</StyledListItem>
					<StyledListItem>
						Logo <CheckIcon />
					</StyledListItem>
					<StyledListItem>Name: {basic.name}</StyledListItem>
					<StyledListItem>Description: {basic.description}</StyledListItem>
				</ul>
				<Typography> Advanced Information</Typography>

				<span>Labels</span>
				{advanced.labels.map((label) => {
					return (
						<StyledListItem key={label.link}>
							<a rel="noopener noreferrer" target="_blank" href={label.link}>
								{label.link}
							</a>
						</StyledListItem>
					);
				})}
				<span>Equipment</span>
				<ul>
					{advanced.setup.equipment.map((item, index) => {
						return (
							<StyledListItem key={item}>
								Equipment Item #{index + 1}: {item}
							</StyledListItem>
						);
					})}
					<StyledListItem>
						Image of Setup <CheckIcon />
					</StyledListItem>
				</ul>

				<span>Hospitality</span>
				<ul>
					{advanced.hospitality.map((item, index) => {
						return (
							<StyledListItem key={item}>
								Hospitality Item #{index + 1}: {item}
							</StyledListItem>
						);
					})}
				</ul>
			</div>
			<ButtonWrapper>
				<Button onClick={handleBack}>Back</Button>

				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						handleNext();
						handleSubmit(basic, advanced, socialMedia);
					}}
				>
					{submitButtonLabel}
				</Button>
			</ButtonWrapper>
		</div>
	);
}
