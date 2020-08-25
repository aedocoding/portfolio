import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <CardActionArea component="a" href="#">
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
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={
              "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/74409575_2696351543760137_1881339947894439936_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=JgjJGxjVWO0AX-c9UXk&_nc_ht=scontent-lax3-1.xx&oh=8c926ee36a5ff3ab04ce688d5cc9f1e3&oe=5F6BD437"
            }
          />
        </Hidden>
      </Card>
    </CardActionArea>
  );
}

About.propTypes = {};
