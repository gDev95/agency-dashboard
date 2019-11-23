import styled from "styled-components";
import { Button } from "@material-ui/core";

interface Props {
	component: string;
}
const ProfileImageButton = styled(Button)<Props>`
	display: flex !important;
	flex-direction: column;
	height: 200px;
	width: 200px;
	border-radius: 50% !important;
	border: 1px solid #d7d9de !important;
`;

export default ProfileImageButton;
