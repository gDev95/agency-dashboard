import React, { ReactNode } from "react";
import {
	List as MaterialUiList,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Typography,
	ListSubheader
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import StyledLink from "../customLink";
import styled from "styled-components";

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
	children?: ReactNode;
	onDelete?(id: string): void;
}

const List = (props: Props) => {
	const { items, subheader, children, path, onDelete } = props;

	if (!items || items.length <= 0) {
		return (
			<EmptyListWrapper>
				<Typography data-testid="emptyListMessage">
					No {path} added yet
				</Typography>
			</EmptyListWrapper>
		);
	}

	const handleDeleteClick = (id: string) => (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
		onDelete && onDelete(id);
	};

	return (
		<StyledMaterialList
			subheader={<StyledListSubheader>{subheader}</StyledListSubheader>}
		>
			{items.map((item: any, index: number) => {
				return (
					<StyledLink key={item.id} to={`/${path}/${item.id}`}>
						<ListItem button={true}>
							{children ? children : null}
							<ListItemText
								data-testid={`itemText${index}`}
								primary={item.primaryText}
								secondary={item.secondaryText}
							/>
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

export default List;
