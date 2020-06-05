import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";

const UploadingProgress = styled(LinearProgress)`
color: #500,
position: 'absolute',
top: '50%',
left: '50%',
marginTop: -12,
marginLeft: -12,
`;

export default UploadingProgress;
