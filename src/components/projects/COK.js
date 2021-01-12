import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import reactNative from "../../assets/icon-react-native.png";
import redux from "../../assets/icon-redux.png";
import ts from "../../assets/icon-ts.png";
import expo from "../../assets/expo.jpg";
import apollo from "../../assets/apollo.png";
import jest from "../../assets/jest.png";
import COKicon from "../../assets/COKicon.jpg";
import googlePlay from "../../assets/google-play.png";
import appstore from "../../assets/appstore.jpg";
import connect1 from "../../assets/connect-1.png";
import connect2 from "../../assets/connect-2.png";
import connect3 from "../../assets/connect-3.png";
import connect4 from "../../assets/connect-4.png";

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

export default function COK() {
  const classes = useStyles();

  return (
    <div className="fade">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
          <Grid justify="center" container spacing={1}>
              <Card align="center" className={classes.skillCard}>
                <CardMedia className={classes.skill} image={COKicon} />
                <Typography color='primary' className={classes.appText}>
                  Connect Our Kids
                </Typography>
              </Card>
            </Grid>
            <Typography color="secondary" className={classes.techStack}>
              DOWNLOAD
            </Typography>
            <Grid justify="center" container spacing={2}>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://apps.apple.com/us/app/connect-our-kids/id1471038972?mt=8">
                    <CardMedia className={classes.skill} image={appstore} />
                  </Link>
                </CardActionArea>
              </Card>

              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://play.google.com/store/apps/details?id=com.connectOurKids&hl=en_US">
                    <CardMedia className={classes.skill} image={googlePlay} />
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
                    <CardMedia className={classes.skill} image={redux} />
                    <Typography>Redux</Typography>
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
                  <Link href="https://docs.expo.io/">
                    <CardMedia className={classes.skill} image={expo} />
                    <Typography>Expo</Typography>
                  </Link>
                </CardActionArea>
              </Card>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://www.apollographql.com/docs/">
                    <CardMedia className={classes.skill} image={apollo} />
                    <Typography>Apollo</Typography>
                  </Link>
                </CardActionArea>
              </Card>
              <Card align="center" className={classes.skillCard}>
                <CardActionArea>
                  <Link href="https://jestjs.io/docs/en/getting-started">
                    <CardMedia className={classes.skill} image={jest} />
                    <Typography>Jest</Typography>
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
              <li>
                Took wireframes and designed new components, as well as wrote
                unit tests for them.
              </li>
              <li>
                Made API calls and ensured components were consuming data from
                the API correctly.
              </li>
              <li>
                Created dynamic filters for cases and connections relatives
                based on criteria like gender and case status.
              </li>
              <li>
                Polished the app for release on both the Google Play Store and
                Apple App Store by the end of internship.
              </li>
            </Typography>
          </Grid>
          <Typography align="center" color="secondary">
            IMAGES
          </Typography>
          <Grid justify="center" container spacing={4}>
            <CardMedia className={classes.cardMedia} image={connect1} />
            <CardMedia className={classes.cardMedia} image={connect2} />
            <CardMedia className={classes.cardMedia} image={connect3} />
            <CardMedia className={classes.cardMedia} image={connect4} />
          </Grid>
        </div>
      </Card>
      <div>
        {/* <Typography color="secondary">FEATURES BUILT</Typography>
        <Typography>
          <li>Created modal for logging calls in the app</li>
          <li>
            Created error message to accompany the modal if it isn't logged in
            the app
          </li>
          <li>
            Created form for adding new foster child case and hooked it up to
            backend
          </li>
          <li>
            Created form for adding new connection/relative of foster child and
            hooked it up to backend
          </li>
          <li>
            Created dynamic filters for cases and connections relatives based on
            criteria like gender and case status.
          </li>
          <li>
            Fixed bug in which using sorting option for cases or connections
            resulted in nothing happening.
          </li>
          <li>
            Fixed bug in which list of cases wasn't properly sorted after
            submitting a new case
          </li>
          <li>Wrote unit tests for adding a new foster child case</li>
          <li>
            Made styling/formatting changes throughout the app as requested by
            stakeholder or users
          </li>
        </Typography> */}
      </div>
    </div>
  );
}

COK.propTypes = {};
