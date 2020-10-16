import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Sidebar from "./Sidebar";
import post1 from './blogposts/bp.1.md';
import post2 from './blogposts/bp.2.md';
import post3 from './blogposts/bp.3.md';
import BlogMain from './BlogMain'
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [{num: post3, month:'septcont'},{num: post2, month:'september'}, {num: post1, month: 'august'} ];

const sidebar = {
  title: "",
  description:
    "A collection of development-related posts on topics I am either learning or find interesting.",
  archives: [
    { title: "September 2020", url: "#september" },{ title: "August 2020", url: "#august" },
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
