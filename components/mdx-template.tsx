import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Box } from "rebass";
import Test from "./test";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

export default function PageTemplate({ data: { mdx } }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={{ Box, Test }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </ThemeProvider>
  );
}
export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
