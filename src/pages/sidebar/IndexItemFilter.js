import React from 'react';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';

const IndexItemFilter = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.itemFilter}>
				<h1 className={classes.itemFilterHeading}> Item Filters</h1>
				<p className={classes.listingType}> Listing Type</p>
				<div className="d-flex m-2 justify-content-center">
					<ButtonComponent
						description="Buy Now"
						padding="1px 4px"
						width="80px"
						margin="0px 7px"
						color="inherit"
						bgColor="transparent"
						border="1px solid #525252 "
						borderRadius="7px"
						bgcolorHover="rgb(241 239 240)"
					/>
					<ButtonComponent
						description="Auction"
						padding="1px 4px"
						margin="0px 7px"
						width="80px"
						color="inherit"
						bgColor="transparent"
						border="1px solid #525252 "
						borderRadius="7px"
						bgcolorHover="rgb(241 239 240)"
					/>
				</div>
			</div>
		</div>
	);
};
export default IndexItemFilter;
