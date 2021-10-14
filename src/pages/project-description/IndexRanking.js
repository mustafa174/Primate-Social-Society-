import React from 'react';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';

const Ranking = () => {
	const classes = useStyles();
	return (
		<div>
			<br />
			<p className={classes.warningMsg}>Ranking Method Preset</p>
			<ButtonComponent
				description="rarity.tools.experiment"
				padding="0px 6px"
				width="180px"
				borderRadius="6px"
				color="#FFFFFF"
				bgColor="#BE185D"
				border="none"
				height="26px"
				bgcolorHover="rgb(167 18 80)"
			/>
			<div className="d-flex mt-3">
				<span>▷</span>
				<p className={` ${classes.descriptionParagraph} ms-2`}>Settings</p>
			</div>
			<div className="d-flex">
				<p className={`${classes.descriptionWarning} me-2`}>Primate Social Society Official Ranking Notes</p>
				<span className="me-2">▷</span>
				<strong className={classes.descriptionParagraph}>Rankings may change! Read More...</strong>
			</div>
		</div>
	);
};
export default Ranking;
