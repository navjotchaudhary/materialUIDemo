import {
  makeStyles,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Card,
  Hidden,
  CardMedia,
} from "@material-ui/core";

const useStyle = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    fles: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const PostCard = ({ post }) => {
  const classes = useStyle();
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" varient="h5">
                {post.title}
              </Typography>
              <Typography color="textSecondary" varient="subtitle1">
                {post.date}
              </Typography>
              <Typography varient="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography varient="subtitle1" style={{ color: "skyblue" }}>
                Continue Reading
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
export default PostCard;
