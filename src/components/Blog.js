import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Sidebar from "./Sidebar";
import post1 from './blogposts/bp.1.md';
import BlogMain from './BlogMain'
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [post1 ];

const sidebar = {
  title: "",
  description:
    "A collection of development-related posts on topics I am either learning or find interesting.",
  archives: [
    { title: "August 2020", url: "#" },
  ],

};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className= 'fade' maxWidth="lg">
        <Grid container spacing={5} className={classes.mainGrid}>
        <BlogMain title="Reflections from a developer in training" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
