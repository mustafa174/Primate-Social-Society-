import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
	input: (props) => ({
		borderRadius: 8,
		width: '85%',
		position: 'relative',
		border: '1px solid black',
		fontSize: 16,
		height: '20px',
		margin: '0px 10px',
		borderColor: '#525252',
		padding: '2px 5px',
		'&::placeholder': {
			fontSize: '17px',
			color: '#585858'
			// color:"#BE185D"
		}
	})
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		width: props.width
	})
}));

const IndexInput = (props) => {
	const classes = useStyles(props);
	return (
		<div className={classes.root}>
			<FormControl>
				<BootstrapInput id="demo-customized-textbox" placeholder={props.placeHolder} />
			</FormControl>
		</div>
	);
};
export default IndexInput;
