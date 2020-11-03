import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Sidebar from "./Sidebar";
import post1 from './blogposts/bp.1.md';
// import post2 from './blogposts/bp.2.md';
// import post3 from './blogposts/bp.3.md';
// import post4 from './blogposts/bp.4.md';
import BlogMain from './BlogMain'
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [
  // {num: post4, month:'septcont'},{num: post3, month:'septcont'},{num: post2, month:'september'}, 
{num: post1, month: 'November'} ];

const sidebar = {
  title: "",
  description:
    "A blog about full stack related topics in 5 minutes or less.",
  archives: [
    { title: "November 2020", url: "#november" },
  ],

};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className= 'fade' maxWidth="lg">
        <Grid container spacing={5} className={classes.mainGrid}>
        <BlogMain title="Features-in-5: Informative developer content in a jiffy" posts={posts} />
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
