import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { change } from "redux-form";
import styled from "styled-components";

import { useNewsPostQuery } from "../generated/graphql";

import { NewsForm } from "./newsForm";

const StyledRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
`;

export const EditNews = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useNewsPostQuery({ variables: { id } });
    const dispatch = useDispatch();
    useEffect(() => {
        if (data?.newsPost) {
            dispatch(change("news", "title", data.newsPost.title));
            dispatch(change("news", "content", data.newsPost.content));
            data.newsPost.link && dispatch(change("news", "link", data.newsPost.link));
            dispatch(change("news", "imageUrl", data.newsPost.imageUrl));
        }
    });
    return (
        <StyledRoot>
            <NewsForm />
        </StyledRoot>
    );
};
