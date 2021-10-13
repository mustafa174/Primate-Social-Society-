import React, { useState, useContext } from 'react';
import { useStyles } from './Styles';
import SelectDropDown from './IndexSelect';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
import ItemFilter from './IndexItemFilter';
import Price from './IndexPrice';
import IndexTraitFilter from './IndexTraitFilter';
import Traits from './IndexTraits';
import Paper from '@material-ui/core/Paper';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';
import { ThemeContext } from '../../ThemeContext';

const Sidebar = (props) => {
	const { 0: darkMode, 1: setDarkMode } = useContext(ThemeContext);
	const classes = useStyles(props);
	const darkchange = () => {
		setDarkMode(!darkMode);
	};
	const themeLight = createTheme({
		palette: {
			background: {
				default: darkMode ? '#1F2937' : '#FFFFFF'
			}
		}
	});
	console.log('props from side', props.darkTheme);
	return (
		<ThemeProvider theme={themeLight}>
			<CssBaseline>
				<div className={classes.root} style={{}}>
					<Typography>
						<h1 className={classes.headingProject}>Project</h1>
						<button onClick={darkchange}>dark mode</button>
					</Typography>

					<SelectDropDown />
					<div className="d-flex w-100 p-3 justify-content-center">
						<InputComponent
							placeHolder="ID.."
							width="46%"
							bgColor={darkMode ? '#374151' : 'white'}
							pColor="#EC407A"
						/>
						<ButtonComponent
							description="Look up"
							padding="0px 7px"
							width="90px"
							borderRadius="8px"
							color="white"
							bgColor="#BE185D"
							border="none"
							height="27px"
							bgcolorHover="rgb(167 18 80)"
						/>
					</div>

					<ItemFilter color={darkMode ? '#D1D5DB' : '#4B5563'} />
					<Price
						description="Price"
						subHeading={true}
						inputPlaceHolderFirst="Min ETH"
						inputPlaceHolderSecond="Max ETH"
					/>
					<Price
						description="Rarity"
						subHeading={false}
						inputPlaceHolderFirst="Min Rank#"
						inputPlaceHolderSecond="Max Rank#"
					/>
					<IndexTraitFilter color={darkMode ? '#D1D5DB' : '#4B5563'} />
					<Traits color={darkMode ? 'red' : '#DB2777'} />
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
};
export default Sidebar;
