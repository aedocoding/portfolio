import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import huddle1 from "../../assets/huddle1.png";
import huddle2 from "../../assets/huddle2.png";
import huddle3 from "../../assets/huddle3.png";
import huddle4 from "../../assets/huddle4.png";
import huddleLogo from "../../assets/playstore_logo.png";
import googlePlay from "../../assets/google-play.png";
import appstore from "../../assets/appstore.jpg";
import reactNative from "../../assets/icon-react-native.png";
import firebase from "../../assets/icon-firebase.png";
import ts from "../../assets/icon-ts.png";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 420,
    height: 760,
    margin: 50,
    borderRadius: 20,
  },
  cardMedia2: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 5,
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
  huddleText: {
    marginBottom: 10,
    textAlign: "center",
    color: "orange",
  },
  bullets: {
    textAlign: "center",
  },
});

export default function Huddle() {
  const classes = useStyles();

  return (
    <div className="fade">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Grid justify="center" container spacing={1}>
              <Card align="center" className={classes.skillCard}>
                <CardMedia className={classes.skill} image={huddleLogo} />
                <Typography className={classes.huddleText}>
                  H U D D L E
                </Typography>
              </Card>
            </Grid>
            <Typography color="secondary" className={classes.techStack}>
              DOWNLOAD
            </Typography>
            <Grid justify="center" container spacing={2}>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="">
                    <CardMedia className={classes.skill} image={appstore} />
                    <Typography>Coming soon</Typography>
                  </Link>
                </CardActionArea>
              </Card>

              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://play.google.com/store/apps/details?id=com.huddleapp.us">
                    <CardMedia className={classes.skill} image={googlePlay} />
                    <Typography></Typography>
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
                  <Link href="https://reactnative.dev/docs/getting-started">
                    <CardMedia className={classes.skill} image={reactNative} />
                    <Typography>React Native</Typography>
                  </Link>
                </CardActionArea>
              </Card>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://firebase.google.com/">
                    <CardMedia className={classes.skill} image={firebase} />
                    <Typography>Firebase</Typography>
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
            </Grid>
          </CardContent>

          <Typography align="center" color="secondary">
            DESCRIPTION
          </Typography>
          <Grid justify="center" container size={1}>
            <Typography>
              <li>
                Set a countdown in the app that only moves when everyone is in
                the app, away from all other distractions.
              </li>
              <li>
                Countdown stops when users try to multitask or put Huddle in the
                background, ensuring that distractions are kept to a minimum.
              </li>
              <li>
                Visual indicator of who's inside the team huddle and who's
                getting distracted by all the other stuff on their phone.
              </li>
              <li>Live chat lets users send messages inside a Huddle.</li>
              <li>Best of all, no sign up or account required!</li>
            </Typography>
          </Grid>

          <Typography align="center" color="secondary">
            IMAGES
          </Typography>
          <Grid justify="center" container spacing={4}>
            <CardMedia className={classes.cardMedia} image={huddle1} />
            <CardMedia className={classes.cardMedia} image={huddle2} />
            <CardMedia className={classes.cardMedia} image={huddle3} />
            <CardMedia className={classes.cardMedia} image={huddle4} />
          </Grid>
        </div>
      </Card>
      <div>
        {/* <Typography color="secondary">MOST CHALLENGING</Typography>
        <Typography color="secondary">MOST INTERESTING</Typography>
        <Typography color="secondary">WHAT I LEARNED</Typography>
        <Typography color="secondary">HARDEST BUG</Typography>
        <Typography color="secondary">WHAT I ENJOYED MOST</Typography>
        <Typography color="secondary">FEATURES BUILT</Typography> */}
      </div>
    </div>
  );
}

Huddle.propTypes = {};
