import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import HTML from "../../assets/icon-html.png";
import CSS from "../../assets/icon-css.png";
import JS from "../../assets/icon-js.png";
import react from "../../assets/icon-react.png";
import redux from "../../assets/icon-redux.png";
import sass from "../../assets/icon-sass.png";
import knex from "../../assets/icon-knex.png";
import node from "../../assets/icon-node.png";
import express from "../../assets/express.png";
import postgresql from "../../assets/icon-postgresql.png";
import yt1 from "../../assets/yt-1.png";
import yt2 from "../../assets/yt-2.png";
import yt3 from "../../assets/yt-3.png";

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
export default function YT() {
  const classes = useStyles();

  return (
    <div className="fade">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Grid justify="center" container spacing={1}>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://www.youtube.com/playlist?list=PLwgPVaBXw16MF5xzwKNNwgPYqdhsaqvmP">
                    <CardMedia
                      className={classes.skill}
                      image={
                        "https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0xffffffff-no-rj-mo"
                      }
                    />
                    <Typography>Youtube Playlist</Typography>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
            <Typography color="secondary" className={classes.techStack}>
              TECH STACK COVERED IN VIDEOS
            </Typography>
            <Grid justify="center" container spacing={5}>
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
                  <Link href="https://sass-lang.com/">
                    <CardMedia className={classes.skill} image={sass} />
                    <Typography>SASS</Typography>
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
            Description
          </Typography>
          <Grid justify="center" container size={1}>
            <Typography>
              <li>
                Contains live coding sessions in which I cover full stack web
                development concepts.
              </li>
              <li>Averaged ~100 unique views bi-weekly</li>
              <li>10 videos in total made over the course of 6 months</li>
              <li>Project was made as part of my part-time job at Lambda School to reach a wider audience rather than tutor students 1:1.</li>
            </Typography>
          </Grid>
          <Typography align="center" color="secondary">
            IMAGES
          </Typography>
          <Grid justify="center" container spacing={4}>
            <CardMedia className={classes.cardMedia} image={yt1} />
            <CardMedia className={classes.cardMedia} image={yt2} />
            <CardMedia className={classes.cardMedia} image={yt3} />
          </Grid>
        </div>
      </Card>
    </div>
  );
}

YT.propTypes = {};
