import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {" "}
          <Button color="secondary">{title}</Button>
        </Typography>
        <Button
          color="secondary"
          startIcon={<FacebookIcon />}
          href="https://www.facebook.com/allen.do.52"
        ></Button>
        <Button
          color="secondary"
          startIcon={<GitHubIcon />}
          href="https://github.com/aedocoding"
        ></Button>
        <Button
          color="secondary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/aedocoding"
        ></Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Button color="secondary">
            <Link style={{ textDecoration: "none" }} to={section.url}>
              <Typography color="secondary" key={section.title}>
                {section.title}
              </Typography>
            </Link>
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
