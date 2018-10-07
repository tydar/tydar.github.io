import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    fontSize: '3em',
    alignSelf: 'center',
    flex: '1 1 auto',
  },
});

function CardIcon(props) {
  const { classes, children, className } = props;
  return <div className={classNames(className, classes.root)}>{children}</div>;
}

export default injectSheet(styles)(CardIcon);
