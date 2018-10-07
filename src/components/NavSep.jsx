import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderColor: theme.colors.dark,
    minHeight: '100%',
    width: '-1px',
    border: 'solid',
    borderWidth: 'thin',
  },
});

const NavSep = ({ classes }) => {
  return <div className={classes.root}></div>;
};

export default injectSheet(styles)(NavSep);
