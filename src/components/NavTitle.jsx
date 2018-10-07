import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    fontWeight: 'bold',
    color: theme.colors.light,
    margin: theme.spacing.unit,
  },
});

const NavTitle = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default injectSheet(styles)(NavTitle);
