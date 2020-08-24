import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Main from "./Main";
import Featured from "./Featured";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const main = {
  title: "Connect Our Kids",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image:
    "https://media-exp1.licdn.com/dms/image/C4D1BAQEQ6dphI3LUUQ/company-background_10000/0?e=2159024400&v=beta&t=2H2DVbdNlJWExnbk-IsJ0Jm8Gt5hTaxN7jiU0SPM648",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featured = [
  {
    title: "Big Armor",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png",
    imageText: "Image Text",
  },
  {
    title: "React Coding Tutorials",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image:
      "https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0xffffffff-no-rj-mo",
    imageText: "Image Text",
  },
];

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Main post={main} />
        <Grid container spacing={4}>
          {featured.map((post) => (
            <Featured key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
