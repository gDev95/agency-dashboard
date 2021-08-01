import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

type PropsType = {
    value: number;
    index: number;
    children: ReactNode;
};
export const TabPanel = ({ value, index, children }: PropsType) => {
    if (value !== index) {
        return null;
    }

    return <StyledRoot>{children}</StyledRoot>;
};
