import React from "react";
import styled from "styled-components";

import { useAddNewsMutation } from "../generated/graphql";

import { NewsForm } from "./newsForm";

const StyledRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
`;

export const AddNews = () => {
    const [addNews] = useAddNewsMutation();
    return (
        <StyledRoot>
            <NewsForm onSubmit={addNews} />
        </StyledRoot>
    );
};
