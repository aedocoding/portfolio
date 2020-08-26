import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
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
    width: 175,
    height: 350,
  },
});

export default function COK() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography variant="h4">Tech Stack</Typography>
            <Typography>
              <ul>
                <li>React Native</li>
                <li>Redux</li>
                <li>TypeScript</li>
                <li>Apollo/GraphQL</li>
                <li>Expo</li>
                <li>Jest</li>
              </ul>
            </Typography>
            <Typography variant="h5">
              Project Dates: April 2020 - June 2020
            </Typography>
            <Typography>
              <Link href="https://apps.apple.com/us/app/connect-our-kids/id1471038972?mt=8">
                App Store
              </Link>
            </Typography>
            <Typography>
              <Link href="https://play.google.com/store/apps/details?id=com.connectOurKids&hl=en_US">
                Google Play
              </Link>
              <Typography>
                <Link href="https://trello.com/b/CAIeAMhU/labs23-connect-our-kids">
                  Trello Board
                </Link>
              </Typography>
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cardMedia} image={connect1} />
        <CardMedia className={classes.cardMedia} image={connect2} />
        <CardMedia className={classes.cardMedia} image={connect3} />
        <CardMedia className={classes.cardMedia} image={connect4} />
      </Card>
      <div>
        <Typography variant="h5">Description</Typography>
        <Typography>
          <li>
            I was assigned to this project during my time in Lambda School's web
            development curriculum - it was a 2 month long group project in
            which our team had a chance to put our training to use in a
            real-world setting. The app was pretty far in development at this
            point but had not yet been deployed to the App Store or Google Play. Our
            job was to make the mobile app achieve feature parity with the
            completed web app on the company's website.
          </li>
          <li>
            Part of what made this project such a great challenge for us was
            being exposed to a completely new tech stack. No one on our team had
            any experience whatsoever in any of the frameworks being used aside
            from Jest, so we had to spend about a week familiarizing ourselves
            with them through online tutorials and the documentation. It
            certainly helped that a lot our training in React made React Native
            feel like an additional layer rather than something completely new -
            but working in the mobile sphere certainly presented it's own unique
            obstacles. While I'm glad for having some time to prepare for the
            project, most of the learning came on the fly during the project
            itself.
          </li>
        </Typography>
        <Typography variant="h5">Features I Built</Typography>
        <Typography>
            <ul>
                <li>Created modal for logging calls in the app</li>
                <li>Created error message to accompany the modal if it isn't logged in the app</li>
                <li>Created form for adding new foster child case and hooked it up to backend</li>
                <li>Created form for adding new connection/relative of foster child and hooked it up to backend</li>
                <li>Created dynamic filters for cases and connections relatives based on criteria like gender and case status.</li>
                <li>Fixed bug in which using sorting option for cases or connections resulted in nothing happening.</li>
                <li>Fixed bug in which list of cases wasn't properly sorted after submitting a new case</li>
                <li>Wrote unit tests for adding a new foster child case</li>
                <li>Made styling/formatting changes throughout the app as requested by stakeholder or users</li>
            </ul>
        </Typography>
      </div>
    </div>
  );
}

COK.propTypes = {};
