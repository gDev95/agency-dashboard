import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { change, Field, reduxForm } from "redux-form";
import styled from "styled-components";
import SaveIcon from "@material-ui/icons/SaveOutlined";

import { TextFieldWrapper } from "../artist/form/styled";
import { formPropsAdapter, useForm } from "../ui/form";
import { usePageContentQuery, useUpdatePageContentMutation } from "../generated/graphql";
import { showNotificationAction } from "../notifications";

const INITIAL_FORM_VALUES = {
    mission: { en: "", es: "" },
    slogan: { en: "", es: "" },
    socialMedia: {
        facebook: "",
        instagram: "",
        soundcloud: "",
    },
};

const StyledRoot = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 8px;
`;

const HeadlineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

const StyledSaveIcon = styled(SaveIcon)`
    margin-right: 4px;
`;

const AdaptedTextField = formPropsAdapter(TextField);

export const RawPageContentForm = () => {
    const dispatch = useDispatch();
    const pageId = useMemo(() => {
        if (!process.env.REACT_APP_PAGE_CONTENT_ID) {
            throw new Error("expected REACT_APP_PAGE_CONTENT_ID to be set as environment variable");
        }
        return process.env.REACT_APP_PAGE_CONTENT_ID;
    }, []);
    const { data: pageContentData } = usePageContentQuery();
    const [updatePageContent] = useUpdatePageContentMutation();
    const pageContent = useForm("pageContent");
    useEffect(() => {
        if (pageContentData?.pageContent) {
            dispatch(change("pageContent", "mission.en", pageContentData.pageContent.mission.en));
            dispatch(change("pageContent", "mission.es", pageContentData.pageContent.mission.es));
            dispatch(change("pageContent", "slogan.en", pageContentData.pageContent.slogan.en));
            dispatch(change("pageContent", "slogan.es", pageContentData.pageContent.slogan.es));
            dispatch(change("pageContent", "socialMedia.facebook", pageContentData.pageContent.socialMedia.facebook));
            dispatch(change("pageContent", "socialMedia.instagram", pageContentData.pageContent.socialMedia.instagram));
            dispatch(change("pageContent", "socialMedia.soundCloud", pageContentData.pageContent.socialMedia.soundcloud));
        }
    }, [pageContentData, dispatch]);
    return (
        <StyledRoot>
            <HeadlineWrapper>
                <h3>Slogan & Mission</h3>
                <Button
                    onClick={async () => {
                        try {
                            await updatePageContent({
                                variables: { id: pageId, pageContent: { ...pageContent, lastModified: new Date() } },
                            });
                        } catch (error) {
                            console.log("Error occured when updating page content");
                            dispatch(showNotificationAction("Updating Page Content failed, please try again"));
                        }
                    }}
                    variant="contained"
                    color="secondary"
                >
                    <StyledSaveIcon />
                    Save
                </Button>
            </HeadlineWrapper>
            <TextFieldWrapper>
                <Field name="slogan.en" component={AdaptedTextField} placeholder="Slogan (English)" multiline={false} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Field name="slogan.es" component={AdaptedTextField} placeholder="Slogan (Spanish)" multiline={false} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Field name="mission.en" component={AdaptedTextField} placeholder="Mission (English)" rows={6} multiline={true} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Field name="mission.es" component={AdaptedTextField} placeholder="Mission (Spanish)" rows={6} multiline={true} />
            </TextFieldWrapper>
            <h3>Social Media</h3>
            <TextFieldWrapper>
                <Field name="socialMedia.facebook" component={AdaptedTextField} placeholder="Facebook Page" multiline={false} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Field name="socialMedia.instagram" component={AdaptedTextField} placeholder="Instagram Page" multiline={false} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Field name="socialMedia.soundcloud" component={AdaptedTextField} placeholder="SoundCloud Page" multiline={false} />
            </TextFieldWrapper>
        </StyledRoot>
    );
};

export const PageContentForm = reduxForm<{}, any>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    form: "pageContent",
    touchOnChange: true,
    initialValues: INITIAL_FORM_VALUES,
})(RawPageContentForm);
