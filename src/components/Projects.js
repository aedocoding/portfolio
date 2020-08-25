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
    "A mobile app made in React Native that was made to help Social Service workers in finding forever homes for foster children. I helped develop features on it as an intern for 2 months.",
  image:
    "https://media-exp1.licdn.com/dms/image/C4D1BAQEQ6dphI3LUUQ/company-background_10000/0?e=2159024400&v=beta&t=2H2DVbdNlJWExnbk-IsJ0Jm8Gt5hTaxN7jiU0SPM648",
  imgText: "main image description",
  linkText: "Continue reading…",
  url: '/connectourkids'
};

const featured = [
  {
    title: "Big Armor",
    description:
      "The front-end I helped build to represent a data science model that analyzes language for toxicity. The model itself was never implemented but the front-end is functioning.",
    image: "https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png",
    imageText: "Image Text",
    url: '/bigarmor'
  },
  {
    title: "React Coding Tutorials",
    description:
      "A collection of recordings I've made for students that covers important web-development concepts - with a focus on React and related frameworks or libraries.",
    image:
      "https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0xffffffff-no-rj-mo",
    imageText: "Image Text",
    url: '/tutorials'
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
