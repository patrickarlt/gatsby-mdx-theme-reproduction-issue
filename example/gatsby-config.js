module.exports = {
  plugins: [
    { resolve: `gatsby-theme-minimal`, options: {} },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "doc",
        path: `${__dirname}/doc/`,
      },
    },
  ],
};
