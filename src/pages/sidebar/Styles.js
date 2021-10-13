import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	//parent sidebar
	root: {
		width: '27%',
		padding: '10px 10px',
		textAlign: 'center',
		marginTop: '10px '
	},
	headingProject: {
		color: '#BE185D',
		fontSize: '25px',
		textAlign: 'center',
		padding: '5px 0px',
		fontWeight: '900'
	},
	formControl: {
		width: '80%'
	},
	SelectInput: {
		borderColor: '#525252',
		'&:before': {
			borderColor: 'transparent !important'
		},
		'&:after': {
			borderColor: 'transparent !important'
		}
	},
	//item filter
	itemFilterHeading: {
		fontSize: '23px',
		color: '#4B5563',
		fontWeight: 900,
		margin: '0px'
	},
	listingType: {
		fontWeight: 900,
		fontSize: '17px',
		color: '#DB2777'
	},
	price: {
		fontWeight: 900,
		fontSize: '17px',
		color: '#DB2777'
	},
	priceSubHeading: {
		color: '#DB2777',
		fontSize: '17px'
	},
	//trait filter
	checkBoxLabel: {
		fontSize: '17px',
		color: '#9CA3AF',
		fontWeight: 900,
		lineHeight: '10px'
	},
	//traits
	traits: {
		width: '100%',
		margin: '15px 0px 0px 10px',
		fontWeight: 900,
		color: '#BE185D',
		textAlign: 'start',

		'&::after': {
			content: '""',
			display: 'block',
			width: '100%',
			paddingBottom: '5px',
			borderBottom: '1px solid #c9c3c3'
		}
	},
	listParent: {
		margin: '0px 0px 0px 10px !important'
	}
}));
