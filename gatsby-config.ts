import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Oliver Kipkemei`,
    siteUrl: `https://gatsbyjsportfoliomain.gatsbyjs.io/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/oliverimg.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-transformer-remark`,
  `gatsby-transformer-json`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  // {
  //   resolve: `gatsby-source-graphql`,
  //   options:{
  //     typeName: `Blog`,
  //     fieldName: `blog`,
  //     url:`https://medium2.p.rapidapi.com/`,
  //     headers:{
  //       "x-rapidapi-key":`b14fc5fcb1msh9aad0ec075830d6p13ca9bjsn1c3c8cc27fdb`
  //     },
  //     query:`
  //       query{
  //         allPosts{
  //           edges{
  //             node{
  //               id
  //               title
  //             }
  //           }
  //         }
  //       }
  //     `
  //   }
  // },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "projects",
      "path": "./src/projects/"
    },
    __key: "projects"
  },{
    resolve: 'gatsby-source-dev',
    options:{
      username: 'olivermengich'
    }
  },{
    resolve: `gatsby-source-hashnode`,
    options: {
      username: `midfielder`,
      // you can also provide your own API key here
      // if you don't have one, you can get it from https://hashnode.com/settings/api
    },
  },
  {
    resolve: 'gatsby-omni-font-loader',
    options:{
      enableListener: true,
      preconnect: ['https://fonts.googleapis.com','https://fonts.gstatic.com'],
      web:[{
        name: 'Fruktur',
        file: 'https://fonts.googleapis.com/css2?family=Fruktur&amp;family=Zen+Kurenaido&amp;display=swap'
      }]
    }
  }]
};

export default config;
