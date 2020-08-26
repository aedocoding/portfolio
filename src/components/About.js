import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import HTML from "../assets/icon-html.png";
import CSS from "../assets/icon-css.png";
import JS from "../assets/icon-js.png";
import knex from "../assets/icon-knex.png";
import node from "../assets/icon-node.png";
import python from "../assets/icon-python.png";
import react from "../assets/icon-react.png";
import reactNative from "../assets/icon-react-native.png";
import redux from "../assets/icon-redux.png";
import ts from "../assets/icon-ts.png";
const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 320,
    height: 400,
  },
  skillCard: {
    width: 150,
    margin: 10,
  },
  skill: {
    height: 115,
    width: 115,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography variant="h5">
              If you've made it this far, welcome to my portfolio website!
            </Typography>
            <Typography>
              This website was made so I could learn how to use Material-UI,
              start a personal developer's blog, and showcase some of the work
              I've done.
            </Typography>
            <Typography>
              My own personal coding journey began in 2019 when I was 1 year
              into pharmacy school. Deciding that the world of pharmaceutics and
              science wasn't for me, I pivoted and haven't looked back since.
              Although my time in pharmacy was short, I was fortunate to have
              met my girlfriend and partner, Shana, because of it - as her
              cousin was my classmate. We like to joke that although you can't
              put a price on love, she cost me $65,000 (the cost of my loans for
              a year of pharmacy school).
            </Typography>
            <Typography>
              I currently reside in sunny Southern California, so feel free to
              connect with me on any sites linked here.
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cardMedia}
          image={
            "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/74409575_2696351543760137_1881339947894439936_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=JgjJGxjVWO0AX-c9UXk&_nc_ht=scontent-lax3-1.xx&oh=8c926ee36a5ff3ab04ce688d5cc9f1e3&oe=5F6BD437"
          }
        />
      </Card>

      <Typography variant="h5" align="center">
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://www.w3schools.com/html/">
              <CardMedia className={classes.skill} image={HTML} />
              <Typography>HTML</Typography>
            </Link>
          </CardActionArea>
        </Card>

        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://www.w3.org/Style/CSS/Overview.en.html">
              <CardMedia className={classes.skill} image={CSS} />
              <Typography>CSS</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://www.w3schools.com/js/">
              <CardMedia className={classes.skill} image={JS} />
              <Typography>JavaScript</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://reactjs.org/docs/getting-started.html">
              <CardMedia className={classes.skill} image={react} />
              <Typography>React</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://reactnative.dev/docs/getting-started">
              <CardMedia className={classes.skill} image={reactNative} />
              <Typography>React Native</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://redux.js.org/">
              <CardMedia className={classes.skill} image={redux} />
              <Typography>Redux</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://nodejs.org/en/">
              <CardMedia className={classes.skill} image={node} />
              <Typography>Node.js</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="http://knexjs.org/">
              <CardMedia className={classes.skill} image={knex} />
              <Typography>Knex.js</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://www.typescriptlang.org/">
              <CardMedia className={classes.skill} image={ts} />
              <Typography>TypeScript</Typography>
            </Link>
          </CardActionArea>
        </Card>
        <Card align="center" className={classes.skillCard}>
          <CardActionArea>
            <Link href="https://www.python.org/about/">
              <CardMedia className={classes.skill} image={python} />
              <Typography>Python</Typography>
            </Link>
          </CardActionArea>
        </Card>
        {/* <Typography>
          <ul>

            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Knex.js</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </Typography> */}
      </Grid>
    </div>
  );
}

About.propTypes = {};
