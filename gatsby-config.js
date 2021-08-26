module.exports = {
  siteMetadata: {
    siteUrl: "https://www.immaroot.com",
    title: "immaroot",
      author: "Killian Kelly",
      twitter: "immaroot",
      github: "immaroot",
      linkedIn: "killian-kelly-a305b4200",
      avatar: "avatar.png",
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          },
      },
      "gatsby-plugin-mdx",
  ],
};
