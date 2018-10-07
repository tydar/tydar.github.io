import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    minHeight: '1.125em',
    backgroundColor: theme.colors.lightAccent,
    display: 'flex',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    width: '100%',
  },
});

function NavBar(props) {
  const { children, classes } = props;
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

export default injectSheet(styles)(NavBar);
