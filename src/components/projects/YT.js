import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import yt1 from "../../assets/yt-1.png";

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
    borderRadius: 5,
    margin: 20
  },
});

export default function BigArmor() {
  const classes = useStyles();

  return (
    <div className='fade'>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography color="secondary">TECH STACK</Typography>
            <Typography>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Jest</li>
            </Typography>
            <Typography>
              <Link
                color="secondary"
                href="https://www.youtube.com/playlist?list=PLwgPVaBXw16MF5xzwKNNwgPYqdhsaqvmP"
              >
                Tutorial Playlist
              </Link>
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cardMedia} image={yt1} />
        {/* <CardMedia className={classes.cardMedia} image={yt2} />
        <CardMedia className={classes.cardMedia} image={yt3} /> */}
      </Card>
      <div>
        <Typography color='secondary'>DESCRIPTION</Typography>
        <Typography>
          <li>
            This playlist of web development tutorials began as a teaching tool
            during my part time job working as a Team Lead for Lambda School. A
            Team Lead is essentially a coding tutor who checks in daily with
            around 10 students, answering their questions and ensuring they're
            completing projects and tests. To help better prepare them for their
            bi-weekly tests known as sprints, I would do live coding sessions in
            which I covered the concepts they had learned in the past 2 weeks. A
            student had requested that the session be recorded, thus birthing
            the playlist.
          </li>
          <li>
            Eventually I was promoted from Team Lead to Section Lead, thus
            removing me from the daily duty of working with the same group of
            students on coding assignments. I was now managing the Team Leads
            who checked in daily with students and guided them. My previous
            students had asked that I continue the tutorials even though I was
            no longer supervising their progress, which led to my tutorials no
            longer having a live audience as they did in the beginning. I am
            grateful to have had the chance to make these videos, as it let me
            brush up on key web development concepts while also giving me a
            chance to teach others!
          </li>
        </Typography>
      </div>
    </div>
  );
}

BigArmor.propTypes = {};
