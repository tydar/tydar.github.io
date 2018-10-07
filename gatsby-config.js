/*
 * Light: #F8F6F6
 * Light accent: #C36F75
 * Main brand color: #B59F80
 * Dark accent: #8E5E36
 * Dark shades: #424242
 */

const theme = {
  lightColor: '#F8F6F6',
  lightAccentColor: '#C36F75',
  mainColor: '#B59F80',
  darkAccentColor: '#8E5E36',
  darkColor: '#424242',
  colors: {
    light: '#F8F6F6',
    lightAccent: '#C36F75',
    main: '#B59F80',
    darkAccent: '#8E5E36',
    dark: '#424242',
  },
  spacing: {
    unit: 5,
  },
};

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-jss',
      options: { theme },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
