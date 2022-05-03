import { Grid, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
  },
  sideBarSection: {
    marginTop: theme.spacing(3),
    fontSize: "30px",
  },
}));

const SideBar = ({ archives, description, social, title }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography varient="h6" gutterButtom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography varient="h6" gitterBottom className={classes.sideBarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography varient="h4" gutterButtom className={classes.sideBarSection}>
        social
      </Typography>
      {social.map((network) => {
        return (
          <Link dosplay="block" varient="body1" href="#" key={network.name}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        );
      })}
    </Grid>
  );
};

export default SideBar;
