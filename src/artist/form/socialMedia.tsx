import React, { useEffect } from "react";

import { TextFieldWrapper, ButtonWrapper } from "./styled";
import { reduxForm, Field, change } from "redux-form";
import { AdaptedTextField } from "../../ui/form";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

const StyledRoot = styled.div`
	padding-top: 40px;
`;
const StyledTextField = styled(AdaptedTextField)`
	margin-top: 20px;
`;
interface InitialStateType {
	facebook: string | null;
	instagram: string | null;
	beatport: string | null;
	residentAdvisor: string | null;
	soundCloud: string | null;
}

const INITIAL_STATE = {
	facebook: null,
	instagram: null,
	beatport: null,
	residentAdvisor: null,
	soundCloud: null,
};

const RawSocialMediaForm = (props: any) => {
	const { socialMediaLinks } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		if (socialMediaLinks) {
			Object.keys(socialMediaLinks).map((key) =>
				dispatch(change("socialMedia", key, socialMediaLinks[key]))
			);
		}
	}, [socialMediaLinks]);
	return (
		<StyledRoot>
			<TextFieldWrapper>
				<Field
					isRequired={true}
					name="facebook"
					component={StyledTextField}
					placeholder="Link to Facebook Page"
				/>
				<Field
					name="instagram"
					isRequired={true}
					component={StyledTextField}
					placeholder="Link to Instagram Profile"
				/>
				<Field
					name="beatport"
					isRequired={true}
					component={StyledTextField}
					placeholder="Link to Beatport Profile"
				/>
				<Field
					name="residentAdvisor"
					isRequired={true}
					component={StyledTextField}
					placeholder="Link to Resident Advisor Page"
				/>
				<Field
					name="soundCloud"
					isRequired={true}
					component={StyledTextField}
					placeholder="Link to SoundCloud Profile"
				/>
			</TextFieldWrapper>
			<ButtonWrapper>
				<Button onClick={props.handleBack}>Back</Button>

				<Button
					variant="contained"
					color="primary"
					disabled={!props.valid}
					onClick={props.handleNext}
				>
					Next
				</Button>
			</ButtonWrapper>
		</StyledRoot>
	);
};

export const SocialMediaForm = reduxForm<InitialStateType, any>({
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	form: "socialMedia",
	touchOnChange: true,
	initialValues: INITIAL_STATE,
})(RawSocialMediaForm);
