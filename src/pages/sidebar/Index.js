import React, { useState } from 'react';
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

const Sidebar = () => {
	const [ darkMode, setDarkMode ] = useState(false);
	const classes = useStyles();
	const changetheme = () => {
		setDarkMode(!darkMode);
	};
	const themeMode = createTheme({
		palette: {
			type: darkMode ? 'dark' : 'light'
		}
	});

	return (
		<ThemeProvider theme={themeMode}>
			<Paper elevation={0}>
				<div className={classes.root}>
					<Typography>
						<h1 className={classes.headingProject}>Project</h1>
						<button onClick={changetheme}>change theme</button>
					</Typography>

					<SelectDropDown />
					<div className="d-flex w-100 p-3 justify-content-center">
						<InputComponent placeHolder="ID.." width="46%" />
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
					<ItemFilter />
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
					<IndexTraitFilter />
					<Traits />
				</div>
			</Paper>
		</ThemeProvider>
	);
};
export default Sidebar;
