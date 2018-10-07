import React from 'react';
import injectSheet from 'react-jss';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import CardIcon from '../components/CardIcon';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';

const styles = theme => ({
  container: {
    width: '65%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    color: theme.colors.dark,
  },
  projectsArray: {
    display: 'flex',
    flexGrow: 1,
    marginTop: '2em',
    marginBottom: '2em',
    flexDirection: 'column',
  },
  '@media (min-width: 600px)': {
    projectsArray: {
      flexDirection: 'row',
    },
  },
  card: {
    width: 200,
    height: 200,
  },
  content: {
    fontSize: '.8em',
  },
  cardLink: {
    textDecoration: 'none',
  },
});

function WorkPage(props) {
  const { classes, data } = props;
  return (
    <Layout>
      <div className={classes.container}>
        <h2>Odds and ends</h2>
        {"I've worked on these projects recently:"}
        <div className={classes.projectsArray}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug} className={classes.cardLink}>
                <Card className={classes.card}>
                  <CardTitle>{node.frontmatter.title}</CardTitle>
                  <p className={classes.content}>{node.excerpt}</p>
                  <CardIcon>{node.frontmatter.emoji}</CardIcon>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        technologies
                        emoji
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;

export default injectSheet(styles)(WorkPage);
