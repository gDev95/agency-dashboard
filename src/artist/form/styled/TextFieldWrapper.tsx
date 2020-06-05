import styled, { css } from "styled-components";

interface Props {
	margin?: number;
	marginLeft?: number;
	marginRight?: number;
}

const TextFieldWrapper = styled.div<Props>`
	width: 100%
		${props => css`
			margin: ${props.margin ? props.margin + "px" : 0};
			margin-left: ${props.marginLeft ? props.marginLeft + "px" : 0};
			margin-right: ${props.marginRight ? props.marginRight + "px" : 0};
		`};
	margin-bottom: 10px;

	.MuiFormControl-root {
		width: 100%;
	}
`;

export default TextFieldWrapper;
