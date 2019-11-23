import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";

import FormGroupHeader from "../styled-components/FormGroupHeader";
import ImageUploader from "../styled-components/ImageUploader";
import ProfileImage from "../styled-components/ProfileImage";
import UploadingProgress from "../styled-components/UploadingProgress";

import { ImageUploadHelper } from "../../../helper/ImageUploadHelper/image-uploader";
import TextFieldWrapper from "../styled-components/TextFieldWrapper";
import ProfileImageButton from "../styled-components/ProfileImageButton";
import ErrorText from "../styled-components/ErrorText";

interface Props {
	profileImageUrl: string;
	coverImageUrl: string;
	logoUrl: string;
	name: string;
	description: string;
	formErrors: Set<string>;
	onChange(property: string, value: any): void;
}

const BasicInformationFormGroup = (props: Props) => {
	const [isUploading, setUploading] = useState<boolean>(false);

	const {
		profileImageUrl,
		coverImageUrl,
		logoUrl,
		name,
		description,
		formErrors,
		onChange
	} = props;

	const handleImageChange = (type: string) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUploading(true);
		const imageData = event.target.files ? event.target.files[0] : null;
		const imageName = type + "-image-" + Date.now();
		const imageUploader = new ImageUploadHelper();

		if (!imageData) {
			setUploading(false);
			return;
		}

		try {
			imageUploader.upload(imageName, imageData, (url: string) => {
				switch (type) {
					case "profileImageUrl":
						onChange(type, url);
						break;
					case "coverImageUrl": {
						onChange(type, url);
						break;
					}
					case "logoUrl": {
						onChange(type, url);
						break;
					}
					default:
						return;
				}
				setUploading(false);
				formErrors.has(type) && formErrors.delete(type);
			});
		} catch (error) {
			console.error(error, type);
		}
	};

	const handleTextChange = (type: string) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		switch (type) {
			case "name":
				onChange(type, event.target.value);
				return;
			case "description": {
				onChange(type, event.target.value);
				return;
			}
			default:
				return;
		}
	};

	return (
		<>
			{isUploading && <UploadingProgress />}
			<FormGroupHeader variant="h6" gutterBottom={true}>
				Basic Information
			</FormGroupHeader>
			<ImageUploader>
				{profileImageUrl ? (
					<ProfileImage
						data-testid="basicInformationProfilePicture"
						src={profileImageUrl}
					/>
				) : (
					<>
						<input
							accept="image/*"
							style={{ display: "none" }}
							id="profileImageUrl"
							multiple={true}
							type="file"
							onChange={handleImageChange("profileImageUrl")}
						/>
						<label htmlFor="profileImageUrl">
							<ProfileImageButton component="div">
								<LinkedCameraIcon style={{ fontSize: 60 }} />
							</ProfileImageButton>
						</label>
					</>
				)}
				<input
					accept="image/*"
					style={{ display: "none" }}
					id="coverImageUrl"
					multiple={true}
					type="file"
					onChange={handleImageChange("coverImageUrl")}
				/>
				<label htmlFor="coverImageUrl">
					<Button color="primary" variant="contained" component="span">
						{coverImageUrl ? <CheckIcon /> : null}
						Upload Cover Image
					</Button>
				</label>

				<input
					accept="image/*"
					style={{ display: "none" }}
					id="logoUrl"
					multiple={true}
					type="file"
					onChange={handleImageChange("logoUrl")}
				/>
				<label htmlFor="logoUrl">
					<Button color="primary" variant="contained" component="span">
						{logoUrl ? <CheckIcon /> : null}
						Upload a Logo
					</Button>
				</label>
				{formErrors.has("profileImageUrl") ||
				formErrors.has("coverImageUrl") ||
				formErrors.has("logoUrl") ? (
					<ErrorText>Make sure you uploaded all images</ErrorText>
				) : null}
			</ImageUploader>
			<TextFieldWrapper>
				<TextField
					data-testid="basicInformationName"
					label="Name"
					value={name}
					onChange={handleTextChange("name")}
					margin="normal"
					error={formErrors.has("name")}
				/>
				<TextField
					data-testid="basicInformationDescription"
					label="Description"
					value={description}
					onChange={handleTextChange("description")}
					helperText="Describe the artist by telling his story (for example)"
					margin="normal"
					multiline={true}
					error={formErrors.has("description")}
				/>
			</TextFieldWrapper>
		</>
	);
};

export default BasicInformationFormGroup;
