import React from 'react';
import injectSheet from 'react-jss';
import Layout from '../components/Layout';

/*
 * Light: #F8F6F6
 * Light accent: #C36F75
 * Main brand color: #B59F80
 * Dark accent: #8E5E36
 * Dark shades: #424242
 */

const styles = theme => ({
  container: {
    width: '65%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  text: {
    color: theme.colors.dark,
  },
  link: {
    color: theme.colors.lightAccent,
    '&:hover': {
      color: theme.colors.darkAccent,
    },
    '&:visited': {
      color: theme.colors.darkAccent,
    },
  },
});


function HomePage(props) {
  const { classes } = props;
  return (
    <Layout>
      <div className={classes.container}>
        <h2 className={classes.text}>Hi! I am Tyler Darnell.</h2>
        <p className={classes.text}>
          I like to mess with computers. I'm primarily interested in building web application frontends and useful interfaces for public data.
        </p>
        <p className={classes.text}>
          You can get in touch with me at <a className={classes.link} href="mailto:tyler.a.darnell@gmail.com">tyler.a.darnell@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}

export default injectSheet(styles)(HomePage);
