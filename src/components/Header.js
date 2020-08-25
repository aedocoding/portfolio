  
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
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
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Button 
   variant="link"
   color="default"
   startIcon={ <FacebookIcon/>}
   href="https://www.facebook.com/allen.do.52"
>
</Button>
<Button 
   variant="link"
   color="default"
   startIcon={ <GitHubIcon/>}
   href="https://github.com/immxalan"
>
</Button>
<Button 
   variant="link"
   color="default"
   startIcon={ <LinkedInIcon/>}
   href="https://www.linkedin.com/in/allen-do-500945111/"
>
</Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            // color="inherit"
            // noWrap
            // key={section.title}
            // variant="body2"
            // href={section.url}
            // className={classes.toolbarLink}
            style={{ textDecoration: 'none' }}
            to={section.url}
          >
            <Typography  key={section.title}>
            {section.title}
            </Typography> 
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};