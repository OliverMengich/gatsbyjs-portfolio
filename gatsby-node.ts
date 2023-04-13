import {GatsbyNode, GraphQLTypegenOptions} from "gatsby";
type DevArticle = {
    id: string;
    title: string;
    url: string;
    slug: string;
    body_html: string;
    published_at: string;
    description: string;
    tag_list: string[];
    social_image: string;
};

type DevArticles = {
    allDevArticles: {
        edges: {
            node: DevArticle;
        }[];
    };
};
type Res = {
    data?: DevArticles;
    error?: any;
}
export const createPages: GatsbyNode['createPages'] =async ({graphql, actions}) => {
    const {createPage} = actions;
    const result: Res = await graphql(`
        query{
            allDevArticles{
                edges{
                    node{
                        article{
                            id
                            title
                            url
                            slug
                            body_html
                            published_at
                            description
                            tag_list
                            social_image
                        }
                    }
                }
            }
        }
    `);
    if (result.error) {
        throw result.error
    }
    if (!result.data) {
        throw new Error('No data')
    }
    result?.data.allDevArticles.edges.forEach(({node}:{node:DevArticle}) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: {
                id: node.id,
            }
        })
    })
}