import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));
const Footer = ({ title, description }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography varient="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography
        varient="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {description}
      </Typography>
    </footer>
  );
};

export default Footer;
