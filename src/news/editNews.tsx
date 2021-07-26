import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { change } from 'redux-form';
import styled from 'styled-components';

import { useNewsPostQuery, useUpdateNewsMutation } from '../generated/graphql';

import { NewsForm } from './newsForm';

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
`;

export const EditNews = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useNewsPostQuery({ variables: { id } });
  const [updateNews] = useUpdateNewsMutation();
  const handleSubmit = (news: any) => {
    updateNews({ variables: { id, news } });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.newsPost) {
      dispatch(change('news', 'title', data.newsPost.title));
      data.newsPost.externalLink && dispatch(change('news', 'externalLink', data.newsPost.externalLink));
      data.newsPost.videoLink && dispatch(change('news', 'videoLink', data.newsPost.videoLink));
      data.newsPost.imageUrl && dispatch(change('news', 'imageUrl', data.newsPost.imageUrl));
    }
  }, [dispatch, data?.newsPost]);
  return (
    <StyledRoot>
      <NewsForm onSubmit={handleSubmit} />
    </StyledRoot>
  );
};
