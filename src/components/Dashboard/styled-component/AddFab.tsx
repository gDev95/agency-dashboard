import styled from "styled-components";
import { Fab } from "@material-ui/core";

const AddFab = styled(Fab)`
	position: absolute !important;
	right: -20px;
	bottom: -30px;
	z-index: 1;

	// Breakpoint for Grid xs/md
	@media (max-width: 960px) {
		right: 0;
	}
`;

export default AddFab;
