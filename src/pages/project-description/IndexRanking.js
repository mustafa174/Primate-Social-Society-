import React, { useContext, useState, useCallback } from 'react';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';
import { ThemeContext } from '../../ThemeContext';
import { Button } from '@material-ui/core';
import SettingsButtons from './SettingsButtons';
const Ranking = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const [ btnShow, setBtnShow ] = useState(false);
	const settingsBtnShow = useCallback(
		() => {
			setBtnShow(!btnShow);
		},
		[ btnShow ]
	);
	console.log('asdasdsetings', btnShow);
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
				<Button disableRipple elevation={0} onClick={settingsBtnShow}>
					<span style={{ color: darkMode ? '#FFFFF' : ' #DB2777' }}>
						{btnShow ? <span>▽</span> : <span>▷</span>} Settings
					</span>
				</Button>

				<br />
			</div>
			{btnShow ? <SettingsButtons /> : null}
			<div className="d-flex">
				<p className={`${classes.descriptionWarning} me-2`}>Primate Social Society Official Ranking Notes</p>
				<span className="me-2" style={{ color: darkMode ? '#FFFFF' : ' #DB2777' }}>
					▷
				</span>
				<strong className={classes.descriptionParagraph}>Rankings may change! Read More...</strong>
			</div>
		</div>
	);
};
export default React.memo(Ranking);
{
	/* <span style={{ color: darkMode ? '#FFFFF' : ' #DB2777' }}>▷</span>
					<p className={` ${classes.descriptionParagraph} ms-2`}>Settings</p> */
}
