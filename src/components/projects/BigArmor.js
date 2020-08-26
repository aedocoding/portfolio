import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
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
  cardMedia: {
    width: 550,
    height: 350,
  },
});

export default function BigArmor() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography variant="h4">Tech Stack</Typography>
            <Typography>
              <ul>
                <li>React</li>
                <li>React Router</li>
                <li>TypeScript</li>
                <li>SASS</li>
                <li>amCharts</li>
              </ul>
            </Typography>
            <Typography variant="h5">Project Dates: May 2020</Typography>
            <Typography>
              <Link href="https://master.d1lbzqg7vuxz8b.amplifyapp.com/">
                Link to deployed website
              </Link>
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cardMedia} image={big2} />
      </Card>
      <div>
        <Typography variant="h5">Description</Typography>
        <Typography>
          <li>
            This project was assigned to our team in parallel with the other
            project displayed on my portfolio (Connect Our Kids). We were
            assigned to work with a data science team that was in the process of
            creating a language model that would analyze text for toxicity as
            well as various other parameters. While the data science team built
            the API, we would build the front end as well as the form necessary
            to demo the API and have the model return us the parameters in the
            form of JSON. The end goal was to take that JSON object and
            represent it using a radar chart.
          </li>
          <li>
            Ultimately, the data science team fell short of fully implementing
            their model. Hosting it on Google Cloud caused a bevy of issues so
            we were never able to demo the API on the front-end we built for it.
            The website still exists and even includes a section dedicated to
            demoing the now defunct API. The total time spent on the front end
            for this project was around a week.
          </li>
        </Typography>
        <Typography variant="h5">Features I Built</Typography>
        <Typography>
          <ul>
            <li>
              Led the team on overall design and color scheme for the website.
            </li>
            <li>Created the "Google Cloud" banner on the home page.</li>
            <li>
              Added the scrolling animation effect for the 6 parameters
              described on the "Try It" page.
            </li>
            <li>
              Added the scrolling effect on the "Documentation" page as well as
              the jump-to-section effect.
            </li>
            <li>
              Added several CSS animations (like the fade-in) throughout the
              wensite.
            </li>
          </ul>
        </Typography>
      </div>
    </div>
  );
}

BigArmor.propTypes = {};
