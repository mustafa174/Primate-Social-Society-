import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, state) => ({
	button: (props) => ({
		border: props.border,
		padding: props.padding,
		letterSpacing: '1px',
		width: props.width,
		borderRadius: props.borderRadius,
		fontSize: props.fontSize,
		backgroundColor: props.bgColor,
		color: props.color,
		fontWeight: 400,
		margin: props.margin,
		height: props.height,

		'&:hover': {
			// backgroundColor: 'rgb(167 18 80)'
			backgroundColor: props.bgcolorHover

			// backgroundColor: 'rgb(241 239 240)'
		}
	})
}));
