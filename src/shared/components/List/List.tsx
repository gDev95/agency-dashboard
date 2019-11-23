import React, { ReactNode } from "react";
import {
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import StyledMaterialList from "./styled-components/StyledList";
import StyledListSubheader from "./styled-components/StyledListSubheader";
import StyledLink from "../../styled-components/CustomLink";
import EmptyListWrapper from "./styled-components/EmptyListWrapper";

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

	return (
		<StyledMaterialList
			subheader={<StyledListSubheader>{subheader}</StyledListSubheader>}
		>
			{items.map((item: any, index: number) => {
				return (
					<StyledLink key={item.id} to={`/dashboard/${path}/${item.id}`}>
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
										onClick={() => onDelete && onDelete(item.id)}
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
