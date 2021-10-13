import React from 'react';
import { useStyles } from './Styles';

const Button = (props) => {
	const classes = useStyles(props);
	return (
		<div>
			<button className={classes.button}>{props.description}</button>
		</div>
	);
};
export default Button;
{
	/* <ContactButton
							description="CONTACT US"
							padding="13px 13px"
							fontSize="16px"
							width="160px"
							color="#c6c9d8"
							marginBotm="-10px"
							borderRadius="6px"
						/> */
}
