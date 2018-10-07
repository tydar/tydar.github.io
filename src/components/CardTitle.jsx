import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';


const styles = theme => ({
  root: {
    color: theme.colors.light,
    fontWeight: 'light',
    marginBottom: '5%',
    alignSelf: 'center',
  },
});

function CardTitle(props) {
  const { classes, className, children } = props;
  return <div className={classNames(className, classes.root)}>{children}</div>;
}

export default injectSheet(styles)(CardTitle);
