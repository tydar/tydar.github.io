import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import gh from './GitHub32.png';

export default ({ data }) => {
  const project = data.markdownRemark;
  return (
    <Layout>
      <h3>{project.frontmatter.title} - {project.frontmatter.emoji}</h3>
      <em>
        Technologies: {project.frontmatter.technologies}
      </em>
      {
        project.frontmatter.github ? (
          <p>
            <a href={project.frontmatter.github}>
              <img src={gh} alt="Github link" />
            </a>
          </p>
        ) : null
      }
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                technologies
                emoji
                github
            }
        }
    }
`;
