import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import About1 from "../assets/about.jpg";
import About2 from "../assets/about2.jpg";
import About3 from "../assets/about3.JPG";
import About4 from "../assets/about4.JPG";
import About5 from "../assets/about5.jpg";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
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
import AboutScroll from "./AboutScroll"
const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
    height: 250,
    margin: 20,
    borderRadius: 5
  },
  cardMedia2: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 5
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
    <div className='fade'>
      <Card className={classes.card}>
      <CardMedia
          className={classes.cardMedia}
          image={
            About1
          }
        />

          <CardMedia
          className={classes.cardMedia}
          image={
            About3
          }
        />
          <CardMedia
          className={classes.cardMedia}
          image={
            About4
          }
        />
                  <CardMedia
          className={classes.cardMedia}
          image={
            About5
          }
        />
                <CardMedia
          className={classes.cardMedia2}
          image={
            About2
          }
        />

        
      </Card>

      <Typography variant="h5" align="center">
        <Button color="secondary">Skills</Button>
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
      </Grid>
      <AboutScroll/>
    </div>
  );
}

About.propTypes = {};
