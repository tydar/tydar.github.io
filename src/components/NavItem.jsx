import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    color: theme.colors.light,
    margin: theme.spacing.unit,
    textDecoration: 'none',
  },
});

const NavItem = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default injectSheet(styles)(NavItem);
