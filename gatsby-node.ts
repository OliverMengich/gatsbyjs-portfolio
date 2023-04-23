import type {GatsbyNode} from "gatsby";
import path from "path";
type DevArticle = {
    article:{
        id: string;
        slug: string;
    }
};
type HashNodeArticle = {
    id: string;
    slug: string;
};
type DevArticles = {
    allDevArticles: {
        edges: {
            node: DevArticle;
        }[];
    };
    allHashNodePost: {
        nodes: HashNodeArticle[];
    };
};
type Res = {
    data?: DevArticles;
    error?: any;
}
type Res1 = {
    data?: DevArticles;
    error?: any;
}
export const createPages: GatsbyNode['createPages']=async ({graphql, actions}) => {
    const {createPage} = actions;
    const result:Res = await graphql(`
        query allDevArticles {
            allDevArticles{
                edges{
                    node{
                        article{
                            id
                            slug
                        }
                    }
                }
            }
            allHashNodePost {
                nodes {
                    id
                    slug
                }
            }
        }
    `);
    result as Res;
    if (result.error) {
        throw result.error
    }
    if (!result.data) {
        throw new Error('No data')
    }
    result?.data.allHashNodePost?.nodes.forEach(({id,slug}:HashNodeArticle) => {
        createPage({
            path: `/blogs/${slug}`,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                id,
            }
        })
    })
    result?.data.allDevArticles.edges.forEach(({node}:{node:DevArticle}) => {
        createPage({
            path: `/blogs/${node.article.slug}`,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                id: node.article.id.toString(),
            }
        })
    })
}