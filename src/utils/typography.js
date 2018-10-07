import Typography from 'typography';
import githubTheme from 'typography-theme-github';

githubTheme.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  overrideStyles: {
    body: {
      margin: 0,
    },
    html: {
      margin: 0,
    },
  },
});

const typography = new Typography(githubTheme);

export default typography;
