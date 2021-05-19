import React, { ReactNode } from "react";
import {
    List as MaterialUiList,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Typography,
    ListSubheader,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

import StyledLink from "../customLink";

const StyledListSubheader = styled(ListSubheader)`
    font-weight: bold;
    font-size: 16px;
`;

const StyledMaterialList = styled(MaterialUiList)`
    max-width: 100%;
    background-color: #fff;
    text-decoration: none;
`;

const EmptyListWrapper = styled.div`
    display: flex;
    max-width: 100%;
    padding: 20px;
`;

interface Props {
    items: any[];
    subheader: string;
    path: string;
    label: string;
    children?: ReactNode;
    // eslint-disable-next-line no-unused-vars
    onDelete?(id: string): void;
}

export const List = (props: Props) => {
    const { items, subheader, children, path, onDelete, label } = props;

    if (!items || items.length <= 0) {
        return (
            <EmptyListWrapper>
                <Typography>No {label} added yet</Typography>
            </EmptyListWrapper>
        );
    }

    const handleDeleteClick = (id: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onDelete && onDelete(id);
    };

    return (
        <StyledMaterialList subheader={<StyledListSubheader>{subheader}</StyledListSubheader>}>
            {items.map((item: any, index: number) => {
                return (
                    <StyledLink key={item.id} to={`/${path}/${item.id}`}>
                        <ListItem button={true}>
                            {children ? children : null}
                            <ListItemText primary={item.primaryText} secondary={item.secondaryText} />
                            {onDelete && (
                                <ListItemSecondaryAction>
                                    <IconButton
                                        data-testid={`itemSecondaryAction${index}`}
                                        edge="end"
                                        aria-label={`delete ${subheader}`}
                                        onClick={handleDeleteClick(item.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            )}
                        </ListItem>
                    </StyledLink>
                );
            })}
        </StyledMaterialList>
    );
};
