import React, { useContext } from 'react';
import Sidebar from '../pages/sidebar/Index';
import TopBar from '../pages/topbar/Index';
import { Grid } from '@material-ui/core';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from '../ThemeContext';
import ProjectDescription from '../pages/project-description/Index';
const Container = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const themeLight = createTheme({
		palette: {
			background: {
				default: darkMode ? '#e4f0e2' : 'light'
			}
		}
	});
	const themeMode = createTheme({
		palette: {
			type: darkMode ? 'dark' : 'light'
		}
	});
	return (
		<div>
			<TopBar />
			<Grid container direction="row" justifyContent="center">
				<Grid item md={12} lg={2}>
					<Sidebar darkTheme={darkMode} />
				</Grid>
				<Grid item md={12} lg={10}>
					<ProjectDescription />
				</Grid>
			</Grid>
		</div>
	);
};
export default Container;
{
	/* <div className="container-fluid">
<div className="row ">
	<div className="col-lg-2">
	<Sidebar darkTheme={darkMode} />
	</div>
	<div className=" col-lg-10">
	<ProjectDescription />
	</div>
</div>

</div> */
}
{
	/* <Grid container direction="row" justifyContent="center">
				<Grid item sm={8} md={8} lg={2}>
					<Sidebar darkTheme={darkMode} />
				</Grid>
				<Grid item sm={8} md={8} lg={10}>
					<ProjectDescription />
				</Grid>
			</Grid> */
}
