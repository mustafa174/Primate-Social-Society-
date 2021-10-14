import { useStyles } from './Styles';
import React from 'react';

import { Grid } from '@material-ui/core';

const Filter = () => {
	const classes = useStyles();

	return (
		<div>
			<Grid container>
				<Grid item>
					<p className={classes.sortingTitle}>10,000 Total Primate Social Society Official</p>
				</Grid>
			</Grid>
		</div>
	);
};
export default Filter;
