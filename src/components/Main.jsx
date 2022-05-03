import { Grid, Typography, Divider } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import { posts } from "../Data/data";
const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      <Typography varient="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((posts) => (
        <Markdown key={posts.body}>{posts.body}</Markdown>
      ))}
    </Grid>
  );
};

export default Main;
