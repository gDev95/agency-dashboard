import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

interface Props {
	component: string;
	profileImage: string;
}
const ProfileImageButton = styled(Button)<Props>`
	display: flex !important;
	flex-direction: column;
	height: 200px;
	width: 200px;
	border-radius: 50% !important;
	border: 1px solid #d7d9de !important;
	${props =>
		props.profileImage &&
		css`
	background-repeat: no-repeat
	background-size: cover;
	background-position: center;
	background-image: url("${props.profileImage}");
	`}
`;

export default ProfileImageButton;
