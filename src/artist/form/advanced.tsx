import React, { useState } from "react";

import { TextField, Fab, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import CameraEnhanceIcon from "@material-ui/icons/CameraEnhance";

import { Rider, Label } from "../artist.model";
import { ImageUploadHelper } from "../../helper";
import {
	FormGroupHeader,
	UploadingProgress,
	TextFieldWrapper,
	LabelWrapper,
	ErrorText,
	ButtonWrapper,
} from "./styled";

interface Props {
	labels: Label[];
	rider: Rider;
	hospitality: string[];
	formErrors: Set<string>;
	onChange(property: string, value: any): void;
}

export const AdvancedInformatioFormGroup = (props: Props) => {
	const [isUploading, setUploading] = useState<boolean>(false);
	const { labels, rider, hospitality, formErrors, onChange } = props;

	const handleAddItem = (type: string) => (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		switch (type) {
			case "labels":
				onChange(type, [...labels, { link: "", logoUrl: "" }]);
				return;
			case "rider": {
				onChange(type, {
					...rider,
					equipment: [...rider.equipment, ""],
				});
				return;
			}
			case "hospitality": {
				onChange(type, [...hospitality, ""]);
				return;
			}
			default:
				return;
		}
	};

	const handleDeleteItem = (type: string) => (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		switch (type) {
			case "labels":
				const updatedLabels: Label[] = [...labels];
				updatedLabels.pop();
				onChange(type, [...updatedLabels]);
				return;
			case "rider": {
				const updatedEquipment = [...rider.equipment];
				updatedEquipment.pop();
				onChange(type, {
					...rider,
					equipment: [...updatedEquipment],
				});
				return;
			}
			case "hospitality": {
				const updatedHospitality = [...hospitality];
				updatedHospitality.pop();
				onChange(type, [...updatedHospitality]);
				return;
			}
			default:
				return;
		}
	};

	const handleTextChange = (type: string, index: number) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		switch (type) {
			case "labels":
				const updatedLabels: Label[] = [...labels];
				updatedLabels[index].link = event.target.value;
				onChange(type, [...updatedLabels]);
				return;
			case "rider": {
				const updatedEquipment = [...rider.equipment];
				updatedEquipment[index] = event.target.value;
				onChange(type, {
					...rider,
					equipment: [...updatedEquipment],
				});
				return;
			}
			case "hospitality": {
				const updatedHospitality = [...hospitality];
				updatedHospitality[index] = event.target.value;
				onChange(type, [...updatedHospitality]);
				return;
			}
			default:
				return;
		}
	};

	const handleImageChange = (type: string, index?: number) => async (
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
			console.log(labels, index);
			imageUploader.upload(imageName, imageData, (url: string) => {
				switch (type) {
					case "labels":
						if (index === null || index === undefined || index === -1) {
							return;
						}
						const updatedLabels = [...labels];
						updatedLabels[index].logoUrl = url;
						onChange(type, [...updatedLabels]);
						break;
					case "rider": {
						onChange(type, {
							...rider,
							equipmentImageUrl: url,
						});
						break;
					}
					default:
						return;
				}
				setUploading(false);
			});
		} catch (error) {
			console.error(error, type);
		}
	};

	return (
		<>
			{isUploading && <UploadingProgress />}
			<FormGroupHeader variant="h6">Advanced Information</FormGroupHeader>
			<FormGroupHeader variant="subtitle1">Labels</FormGroupHeader>
			{labels.map((label: Label, index) => {
				return (
					<>
						<LabelWrapper>
							<input
								key={`labelImage${index}-${label.logoUrl}`}
								accept="image/*"
								style={{ display: "none" }}
								id={`labelImage${index}`}
								multiple={false}
								type="file"
								onChange={handleImageChange("labels", index)}
							/>
							<label htmlFor={`labelImage${index}`}>
								<Fab color="primary" component="span">
									{label.logoUrl ? (
										<CheckIcon data-testid={`labelImage+${index}`} />
									) : (
										<CameraEnhanceIcon />
									)}
								</Fab>
							</label>
							<TextFieldWrapper marginLeft={20}>
								<TextField
									data-testid={`label+${index}`}
									label="Add a link to the labels website"
									value={label.link}
									onChange={handleTextChange("labels", index)}
								/>
							</TextFieldWrapper>
						</LabelWrapper>
					</>
				);
			})}
			{formErrors.has("link") ? (
				<ErrorText data-testid="labelLinkError">
					Please check if you have added links to each label
				</ErrorText>
			) : null}
			{formErrors.has("logoUrl") ? (
				<ErrorText data-testid="labelLogoUrlError">
					Please check if you have added an image to each label
				</ErrorText>
			) : null}
			<ButtonWrapper position="start">
				<IconButton onClick={handleAddItem("labels")}>
					<AddIcon />
				</IconButton>
				<IconButton onClick={handleDeleteItem("labels")}>
					<DeleteIcon />
				</IconButton>
			</ButtonWrapper>
			<FormGroupHeader variant="subtitle1">Rider</FormGroupHeader>
			{rider.equipment.map((equipment: string, index) => {
				return (
					<>
						<TextFieldWrapper marginLeft={5} marginRight={5}>
							<TextField
								data-testid={`equipment+${index}`}
								label="What type of Equipment does he need?"
								value={equipment}
								onChange={handleTextChange("rider", index)}
							/>
						</TextFieldWrapper>
					</>
				);
			})}
			{formErrors.has("equipment") ? (
				<ErrorText>Please add some equipment</ErrorText>
			) : null}

			<ButtonWrapper position="start">
				<IconButton onClick={handleAddItem("rider")}>
					<AddIcon />
				</IconButton>
				<IconButton onClick={handleDeleteItem("rider")}>
					<DeleteIcon />
				</IconButton>
			</ButtonWrapper>
			<ButtonWrapper position="center" direction="column">
				<input
					accept="image/*"
					style={{ display: "none" }}
					id="raised-button-file"
					multiple={true}
					type="file"
					onChange={handleImageChange("rider")}
				/>
				<label htmlFor="raised-button-file">
					<Button color="primary" variant="contained" component="span">
						{rider.equipmentImageUrl ? (
							<CheckIcon data-testid="equipmentImageUrlUploaded" />
						) : null}
						Upload Picture of Setup
					</Button>
				</label>
				{formErrors.has("equipmentImageUrl") ? (
					<ErrorText data-testid="equipmentImageUrlError">
						Please add an image of the setup
					</ErrorText>
				) : null}
			</ButtonWrapper>

			<FormGroupHeader variant="subtitle1">Hospitality</FormGroupHeader>
			{hospitality.map((item: string, index) => {
				return (
					<>
						<TextFieldWrapper marginLeft={5} marginRight={5}>
							<TextField
								data-testid={`hospitality+${index}`}
								label="What is he asking for?"
								value={item}
								onChange={handleTextChange("hospitality", index)}
							/>
						</TextFieldWrapper>
					</>
				);
			})}
			{formErrors.has("hospitality") ? (
				<ErrorText data-testid="hospitalityError">
					Please add the expected hospitality
				</ErrorText>
			) : null}
			<ButtonWrapper position="start">
				<IconButton onClick={handleAddItem("hospitality")}>
					<AddIcon />
				</IconButton>
				<IconButton onClick={handleDeleteItem("hospitality")}>
					<DeleteIcon />
				</IconButton>
			</ButtonWrapper>
		</>
	);
};
