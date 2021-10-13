import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './Styles';
import './Override.css';
const IndexSelect = () => {
	const menuItems = [
		{
			listItem: 'ten',
			value: 10
		},
		{
			listItem: 'Twenty',
			value: 20
		},
		{
			listItem: 'Thirty',
			value: 30
		}
	];
	const classes = useStyles();
	return (
		<div>
			<FormControl className={classes.formControl}>
				<Select className={classes.SelectInput}>
					{menuItems &&
						menuItems.map((items) => {
							return <MenuItem value={items.value}>{items.listItem}</MenuItem>;
						})}
				</Select>
			</FormControl>
		</div>
	);
};
export default IndexSelect;
