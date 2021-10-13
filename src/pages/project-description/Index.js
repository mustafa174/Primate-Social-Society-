import React from 'react';
import { useStyles } from './Styles';
import mainbanner from '../../assets/main-banner.jpg';
const ProjectDescription = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<img src={mainbanner} alt="bannerAlt" className={classes.bannerImg} />
		</div>
	);
};
export default ProjectDescription;
