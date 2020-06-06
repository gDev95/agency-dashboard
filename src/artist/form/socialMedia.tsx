import React from "react";

import { TextField } from "@material-ui/core";
import { FormGroupHeader, TextFieldWrapper } from "./styled";

interface Props {
	facebook: string;
	instagram: string;
	beatport: string;
	residentAdvisor: string;
	soundCloud: string;
	formErrors: Set<string>;
	onChange(property: string, value: string): void;
}

export const SocialMediaFormGroup = (props: Props) => {
	const {
		facebook,
		instagram,
		beatport,
		residentAdvisor,
		soundCloud,
		formErrors,
		onChange,
	} = props;

	const handleTextChange = (type: string) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		switch (type) {
			case "facebook":
				onChange(type, event.target.value);
				return;
			case "instagram": {
				onChange(type, event.target.value);
				return;
			}
			case "beatport": {
				onChange(type, event.target.value);
				return;
			}
			case "residentAdvisor": {
				onChange(type, event.target.value);
				return;
			}
			case "soundCloud": {
				onChange(type, event.target.value);
				return;
			}
			default:
				return;
		}
	};
	return (
		<>
			<FormGroupHeader variant="subtitle1">Social Media Links</FormGroupHeader>
			<TextFieldWrapper>
				<TextField
					label="Facebook"
					value={facebook}
					onChange={handleTextChange("facebook")}
					error={formErrors.has("facebook")}
				/>
			</TextFieldWrapper>

			<TextFieldWrapper>
				<TextField
					label="Instagram"
					value={instagram}
					onChange={handleTextChange("instagram")}
					margin="normal"
					error={formErrors.has("instagram")}
				/>
			</TextFieldWrapper>
			<TextFieldWrapper>
				<TextField
					label="Beatport"
					value={beatport}
					onChange={handleTextChange("beatport")}
					margin="normal"
					error={formErrors.has("beatport")}
				/>
			</TextFieldWrapper>
			<TextFieldWrapper>
				<TextField
					label="Resident Advisor"
					value={residentAdvisor}
					onChange={handleTextChange("residentAdvisor")}
					margin="normal"
					error={formErrors.has("residentAdvisor")}
				/>
			</TextFieldWrapper>
			<TextFieldWrapper>
				<TextField
					label="SoundCloud"
					value={soundCloud}
					onChange={handleTextChange("soundCloud")}
					margin="normal"
					error={formErrors.has("soundCloud")}
				/>
			</TextFieldWrapper>
		</>
	);
};
