import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListItemIcon, Grid, Typography, Fab, Paper, Tabs, Tab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AccountCirlceIcon from '@material-ui/icons/AccountCircle';
import { useDispatch } from 'react-redux';

import { useArtistsQuery, useDeleteArtistMutation, useDeleteNewsMutation, useNewsQuery } from '../generated/graphql';
import { LoadingIndicator, List, GridContainer, Emoji } from '../ui';
import { ListItemExtractor } from '../helper';
import { PageContentForm } from '../pageContent/pageContentForm';
import { showNotificationAction } from '../notifications';
import { TabPanel } from '../ui/tabs';

type ItemTypes = 'ARTIST' | 'NEWS' | 'EVENTS';

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

const DashboardPaper = styled(Paper)`
  position: relative;
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: #fff;
`;

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledError = styled(Typography)`
  color: red;
`;

export const Dashboard = (props: any) => {
  const { loading, data: artistData, error: artistError, refetch: refetchArtist } = useArtistsQuery();
  const { data: newsData, error: newsError, refetch: refetchNews } = useNewsQuery();
  const [deleteArtist] = useDeleteArtistMutation();
  const [deleteNews] = useDeleteNewsMutation();
  const dispatch = useDispatch();

  const artistItems = artistData && artistData.artists && ListItemExtractor.getArtistItems(artistData);
  const newsItems = newsData && newsData.news && ListItemExtractor.getNewsItems(newsData);
  const [tabValue, setTab] = useState<number>(0);

  const handleTabChange = (event: React.ChangeEvent<any>, newTabValue: number) => {
    setTab(newTabValue);
  };
  if (artistError || newsError) {
    return (
      <ErrorWrapper>
        <StyledError>{artistError ? artistError.message : newsError?.message}</StyledError>
        <Emoji label="crying-face" symbol={'😭'} size={30} />
      </ErrorWrapper>
    );
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  const handleDelete = (type: ItemTypes) => async (id: string) => {
    switch (type) {
      case 'ARTIST':
        try {
          await deleteArtist({
            variables: { id },
          });
          refetchArtist();
        } catch (err) {
          dispatch(showNotificationAction('Deleting Artist failed, please try again'));
        }
        break;
      case 'NEWS':
        try {
          await deleteNews({
            variables: { id },
          });
          refetchNews();
        } catch (err) {
          dispatch(showNotificationAction('Deleting News failed, please try again'));
        }
        break;
      case 'EVENTS':
        break;
      default:
        break;
    }
  };

  return (
    <GridContainer
      {...props}
      container={true}
      direction="row"
      justify="space-around"
      alignItems="flex-start"
      wrap="wrap"
    >
      <Grid item={true} xs={12} md={5}>
        <DashboardPaper>
          <Tabs variant="fullWidth" value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
            <Tab label="Artist" />
            <Tab label="News" />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <List
              items={artistItems}
              subheader="Artists"
              onDelete={handleDelete('ARTIST')}
              path="artist"
              label="artists"
            >
              <ListItemIcon>
                <AccountCirlceIcon />
              </ListItemIcon>
            </List>

            <Link to="/artists">
              <AddFab color="secondary" aria-label="addArtist">
                <AddIcon />
              </AddFab>
            </Link>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <List items={newsItems} subheader="News" onDelete={handleDelete('NEWS')} path="news" label="news">
              <ListItemIcon>
                <AccountCirlceIcon />
              </ListItemIcon>
            </List>

            <Link to="/news">
              <AddFab color="secondary" aria-label="addNews">
                <AddIcon />
              </AddFab>
            </Link>
          </TabPanel>
        </DashboardPaper>
      </Grid>
      <Grid item={true} xs={12} md={5}>
        <DashboardPaper>
          <PageContentWrapper>
            <h2>Page Content Settings</h2>
            <PageContentForm />
          </PageContentWrapper>
        </DashboardPaper>
      </Grid>
    </GridContainer>
  );
};
