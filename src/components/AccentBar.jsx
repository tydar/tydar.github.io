import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  accentbar: {
    width: '100%',
    backgroundColor: theme.color.lightAccent,
    minHeight: '5px',
  },
});

function AccentBar(props) {
  const { classes } = props;
  return (
    <span className={classes.accentbar} />
  );
}

export default injectSheet(styles)(AccentBar);
