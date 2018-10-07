import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { Link } from 'gatsby';
import NavBar from './NavBar';
import NavTitle from './NavTitle';
import NavItem from './NavItem';
import NavSep from './NavSep';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.colors.light,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
  },
  content: {
    width: '75%',
    margin: theme.spacing.unit * 5,
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: theme.colors.light,
    },
  },
});

const Layout = ({ children, className, classes }) => {
  return (
    <div className={classNames(className, classes.root)}>
      <NavBar>
        <Link to="/" className={classes.link}>
          <NavTitle>
            Tyler Darnell
          </NavTitle>
        </Link>
        <NavSep />
        <Link to="/work/" className={classes.link}>
          <NavItem>
            Work
          </NavItem>
        </Link>
      </NavBar>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default injectSheet(styles)(Layout);
