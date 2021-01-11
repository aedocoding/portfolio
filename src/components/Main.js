import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Link to={post.url} style={{ textDecoration: "none" }}>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography variant="h5"  gutterBottom>
                {post.title}
              </Typography>
              <Typography paragraph>
                {post.description}
              </Typography>
              <Button
                variant="outlined"
                style={{ backgroundColor: "#5F96E7" }}
              >
                <Typography style={{ color: "white" }} variant="subtitle1">
                  {post.linkText}
                </Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}

Main.propTypes = {
  post: PropTypes.object,
};
