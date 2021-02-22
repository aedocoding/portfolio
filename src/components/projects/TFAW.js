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
import redux from "../../assets/icon-redux.png";
import knex from "../../assets/icon-knex.png";
import node from "../../assets/icon-node.png";
import express from "../../assets/express.png";
import postgresql from "../../assets/icon-postgresql.png";
import netlify from "../../assets/netlify.png";
import github from "../../assets/github.png";
import TFAW1 from "../../assets/tfaw-map.png";
import TFAW2 from "../../assets/tfaw-analytics.png";
import TFAW3 from "../../assets/tfaw-donut.png";
import TFAW4 from "../../assets/tfaw-radar.png";
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
    border: "1px solid black"
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

export default function TFAW() {
  const classes = useStyles();

  return (
    <div className="fade">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Grid justify="center" container spacing={1}>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://travel-far-and-wide.netlify.app/">
                    <CardMedia className={classes.skill} image={netlify} />
                    <Typography>Deployed Site</Typography>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
            <Typography color="secondary" className={classes.techStack}>
              GITHUB
            </Typography>
            <Grid justify="center" container spacing={2}>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://github.com/Travel-Far-And-Wide/front-end">
                    <CardMedia className={classes.skill} image={github} />
                    <Typography>Front End</Typography>
                  </Link>
                </CardActionArea>
              </Card>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://github.com/Travel-Far-And-Wide/back-end">
                    <CardMedia className={classes.skill} image={github} />
                    <Typography>Back End</Typography>
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
                  <Link href="https://expressjs.com/">
                    <CardMedia className={classes.skill2} image={express} />
                    <Typography>Express.js</Typography>
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
                  <Link href="https://www.postgresql.org/">
                    <CardMedia className={classes.skill} image={postgresql} />
                    <Typography>PostgreSQL</Typography>
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
              <li>Designed database schema and engineered RESTful API.</li>
              <li>
                Wireframed UI and created front end using React and Material UI.
              </li>
              <li>
                Integrated Google Maps API into site + Places into web app’s search.
              </li>
              <li>
                Designed insights algorithm and displayed the results via
                ApexCharts.
              </li>
            </Typography>
          </Grid>
          <Typography align="center" color="secondary">
            IMAGES
          </Typography>
          <Grid justify="center" container spacing={4}>
            <CardMedia className={classes.cardMedia} image={TFAW1} />
            <CardMedia className={classes.cardMedia} image={TFAW3} />
            <CardMedia className={classes.cardMedia} image={TFAW2} />
            <CardMedia className={classes.cardMedia} image={TFAW4} />
          </Grid>
        </div>
      </Card>
    </div>
  );
}
