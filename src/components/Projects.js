import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Main from "./Main";
import Featured from "./Featured";
const HuddleLogo = require("../assets/playstore_logo.png");
const TFAW = require("../assets/tfaw-home.png");
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const main = {
  title: "CONNECT OUR KIDS",
  description:
    "A mobile app made in React Native that was made to help Social Service workers in finding forever homes for foster children. I helped develop features on it as an intern for 2 months.",
  image:
    "https://media-exp1.licdn.com/dms/image/C4D1BAQEQ6dphI3LUUQ/company-background_10000/0?e=2159024400&v=beta&t=2H2DVbdNlJWExnbk-IsJ0Jm8Gt5hTaxN7jiU0SPM648",
  imgText: "main image description",
  linkText: "Continue reading…",
  url: "/connectourkids",
};

const featured = [
  {
    title: "TRAVEL FAR AND WIDE",
    description:
      "Full stack web app that allows users to save places they’ve traveled to or want to travel to, while having insights/recommendations delivered.",
    image: TFAW,
    imageText: "Image Text",
    url: "/travel",
  },
  {
    title: "HUDDLE",
    description:
      "Mobile app made to help keep meetings and study sessions productive and free from distractions like TikTok through a shared team “productivity timer”.",
    image: HuddleLogo,
    imageText: "Image Text",
    url: "/huddle",
  },
  {
    title: "BIG ARMOR",
    description:
      "The front-end I helped build to represent a language model built by the data science team that analyzes for toxicity.",
    image: "https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png",
    imageText: "Image Text",
    url: "/bigarmor",
  },
  {
    title: "REACT CODING TUTORIALS",
    description:
      "A collection of recordings I've made for students that covers important full stack web-development concepts - with a focus on React and Node.js",
    image:
      "https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0xffffffff-no-rj-mo",
    imageText: "Image Text",
    url: "/tutorials",
  },
];

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="fade" maxWidth="lg">
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
