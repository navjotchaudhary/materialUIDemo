import {
  Container,
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "./components/Header";
import "./App.css";
import FeaturedPost from "./components/FeaturedPost";
import { featuredPosts, sidebar } from "./Data/data";
import { PhotoSizeSelectActualRounded } from "@material-ui/icons";
import PostCard from "./components/PostCard";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const useStyle = makeStyles((theme) => {
  mainGrid: {
    marginTop: theme.spacing(3);
  }
});

const App = () => {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const classes = useStyle();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => {
            return <PostCard post={post} key={post.title} />;
          })}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" />
          <SideBar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="footer"
        description="this is the description of the footer"
      />
    </ThemeProvider>
  );
};
export default App;
