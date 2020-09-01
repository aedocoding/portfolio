import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = (theme) => ({
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
});

class Header2 extends Component {
  state = {
    searchNodes: "",
    scrolled: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { classes } = this.props;
    const { scrolled } = this.state;
    return (
      <div
        className={
          scrolled
            ? "nav scroll"
            : !scrolled && !this.props.backgroundTransparent
            ? "nav navNotInvis"
            : "nav"
        }
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {" "}
            <Button color="secondary">{this.props.title}</Button>
          </Typography>
          <Button
            variant="link"
            color="secondary"
            startIcon={<FacebookIcon />}
            href="https://www.facebook.com/allen.do.52"
          ></Button>
          <Button
            variant="link"
            color="secondary"
            startIcon={<GitHubIcon />}
            href="https://github.com/aedocoding"
          ></Button>
          <Button
            variant="link"
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
          {this.props.sections.map((section) => (
            <Button color="secondary">
              <Link style={{ textDecoration: "none" }} to={section.url}>
                <Typography color="secondary" key={section.title}>
                  {section.title}
                </Typography>
              </Link>
            </Button>
          ))}
        </Toolbar>
      </div>
    );
  }
}
Header2.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(Header2);
