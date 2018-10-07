import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = theme => ({
  card: {
    backgroundColor: theme.colors.dark,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    color: theme.colors.light,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: '5px',
    margin: '0.5em',
    '&:hover': {
      boxShadow: '2px 1px 1px black',
    },
  },
});

function Card(props) {
  const { classes, className, children } = props;
  return (
    <div className={classNames(classes.card, className)}>
      {children}
    </div>
  );
}

export default injectSheet(styles)(Card);
