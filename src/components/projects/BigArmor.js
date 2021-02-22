import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import react from "../../assets/icon-react.png";
import sass from "../../assets/icon-sass.png";
import knex from "../../assets/icon-knex.png";
import node from "../../assets/icon-node.png";
import express from "../../assets/express.png";
import postgresql from "../../assets/icon-postgresql.png";
import aws from "../../assets/aws-logo.png";
import github from "../../assets/github.png";
import big1 from "../../assets/big1.png";
import big2 from "../../assets/big2.png";
import big3 from "../../assets/big3.png";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  skill2: {
    height: 115,
    width: "100%",
  },
  cardMedia: {
    width: 800,
    height: 375,
    margin: 50,
    borderRadius: 20,
    border: "1px solid black",
  },
  skillCard: {
    width: 150,
    margin: 10,
  },
  skill: {
    height: 115,
    width: 115,
  },
  techStack: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  appText: {
    marginBottom: 10,
    textAlign: "center",
  },
});
export default function BigArmor() {
  const classes = useStyles();

  return (
    <div className="fade">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Grid justify="center" container spacing={1}>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://master.d1lbzqg7vuxz8b.amplifyapp.com/">
                    <CardMedia className={classes.skill} image={aws} />
                    <Typography>Deployed Site</Typography>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
            <Typography color="secondary" className={classes.techStack}>
              TECH STACK
            </Typography>
            <Grid justify="center" container spacing={3}>
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
                  <Link href="https://sass-lang.com/">
                    <CardMedia className={classes.skill} image={sass} />
                    <Typography>SASS</Typography>
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
            </Grid>
          </CardContent>
          <Typography align="center" color="secondary">
            FEATURES BUILT
          </Typography>
          <Grid justify="center" container size={1}>
            <Typography>
              <li>Wireframed design and and architected website.</li>
              <li>Built and styled components in React with SAASS for Data Science team's needs.</li>
              <li>Added several CSS animations throughout the website.</li>
            </Typography>
          </Grid>
          <Typography align="center" color="secondary">
            IMAGES
          </Typography>
          <Grid justify="center" container spacing={4}>
            <CardMedia className={classes.cardMedia} image={big1} />
            <CardMedia className={classes.cardMedia} image={big2} />
            <CardMedia className={classes.cardMedia} image={big3} />
            {/* <CardMedia className={classes.cardMedia} image={TFAW4} /> */}
          </Grid>
        </div>
      </Card>
    </div>
  );
}

BigArmor.propTypes = {};
