import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    backgroundImage: 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)'
  },
  media: {
    height: 0,
    paddingTop: '66.25%',
  },
  cartActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
