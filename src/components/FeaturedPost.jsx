import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";

const useStyle = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  cover: {
    backgroundImage:
      "url(https://images.pexels.com/photos/715995/pexels-photo-715995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  btn: {
    color: "blue",
  },
});

const FeaturedPost = () => {
  const styles = useStyle();
  return (
    <>
      <Card className={styles.cover}>
        <CardContent className={styles.textContainer}>
          <Typography className={styles.title} gutterBottom>
            Title of a long featured blog post
          </Typography>
          <Typography varient="h5">
            mutiple line of text that fonrm the lede,informing new readers
            quickly and effectively about whats ore interesting in this post's
            contents
          </Typography>
        </CardContent>
        <CardActions>
          <Button varient="text" className={styles.btn}>
            ReadMore
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FeaturedPost;
