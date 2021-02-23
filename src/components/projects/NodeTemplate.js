import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import knex from "../../assets/icon-knex.png";
import node from "../../assets/icon-node.png";
import express from "../../assets/express.png";
import postgresql from "../../assets/icon-postgresql.png";
import github from "../../assets/github.png";

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

export default function NodeTemplate() {
  const classes = useStyles();

  return (
    <div className="fade">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Grid justify="center" container spacing={1}>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://github.com/aedocoding/node-backend-template">
                    <CardMedia className={classes.skill} image={github} />
                    <Typography>Github Repo</Typography>
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
            Description
          </Typography>
          <Grid justify="center" container size={1}>
            <Typography>
              <li>
                This project was made in order to allow developers to quickly
                boilerplate a back end for whatever project they might be
                working on
              </li>
              <li>
              Has only the essentials in getting a working API
                up and running, github repo has more documentation regarding this.
              </li>
            </Typography>
          </Grid>
        </div>
      </Card>
    </div>
  );
}
