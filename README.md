# Gatsby/MDX Theme Issue Reproduction

This repo reproduces an error when using Gatsby Themes that include `gatsby-plugin-mdx` when using `npm`.

This repo is based on https://github.com/gatsbyjs/gatsby-starter-theme-workspace.

## Issue

We publish a theme (`gatsby-theme-minimal`) to a tag on Github via `gitpkg`. This theme configures MDX via `gatsby-plugin-mdx`, configures pages and provides a component for rendering MDX files.

Several additional components are added to the `<MDXProvider>` in the theme:

```jsx
<MDXProvider components={{ Box, Test }}>
  <MDXRenderer>{mdx.body}</MDXRenderer>
</MDXProvider>
```

However when we install with `npm` in the `reproduction` folder we see this on the `/test/` page:

![2020-08-18_12-43-25](https://user-images.githubusercontent.com/378557/90558506-0888b900-e151-11ea-9ef1-6885bc044cbb.png)

We also see the following message in the console:

```
Component Box was not imported, exported, or provided by MDXProvider as global scope commons.js line 5071 > Function:14:13
Component Test was not imported, exported, or provided by MDXProvider as global scope commons.js line 5071 > Function:14:13
Component Box was not imported, exported, or provided by MDXProvider as global scope
```

Installing with `yarn` in the reproduction folder produces this on the `/test/` page:

![2020-08-18_13-04-18](https://user-images.githubusercontent.com/378557/90560069-661e0500-e153-11ea-9bfa-281e40320d88.png)

## Reproduction Steps:

1. Clone this repo
2. `cd reproduction`
3. `npm install`
4. `gatsby develop`
5. Note the styling on `/test/`
6. Kill the server
7. `gatsby clean`
8. Delete `package-lock.json` and `node_modules`
9. `yarn install`
10. `gatsby develop`
11. Note the styling on `/test/`
