import styled, { css } from "styled-components";

interface Props {
	position?: string;
	direction?: string;
}

const ButtonWrapper = styled.div<Props>`
	display: flex;
	${props =>
		props.position && props.direction === "column"
			? css`
					align-items: center;
					flex-direction: column;
			  `
			: null};
	${props =>
		props.position
			? css`
					justify-conent: center;
			  `
			: null};
	padding: 40px;
`;

export default ButtonWrapper;
