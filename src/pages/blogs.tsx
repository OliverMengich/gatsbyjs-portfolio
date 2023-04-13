import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"
import Footer from "../components/Footer/Footer.component";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { type } from "os";
const BlogPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px;
    padding: 0 1rem;
    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin: 0;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 1.5;
        margin: 0;
        margin-bottom: 1rem;
    }
    a {
        color: #000;
        text-decoration: none;
        font-weight: 700;
        &:hover {
            text-decoration: underline;
        }
    }
    .gatsby-image-wrapper {
        width: 100%;
        margin-bottom: 1rem;
    }
`;
type Props = {
    node: {
        article: {
            id: string,
            title: string,
            url: string,
            slug: string,
            description: string,
            published_at: string,
            tag_list: string[],
            cover_image: string
        }
    }
}

const IndexPage: React.FC<PageProps> = (data) => {
    console.log(data);
    const graphQLData= useStaticQuery(graphql`
        query MyQuery{
            allDevArticles {
                edges {
                    node {
                        article {
                            id
                            title
                            description
                            url
                            slug
                        }
                    }
                }
            }
        }
    `)
    console.log(graphQLData);
    return (
        <Layout>
            <main>
                <PageInfoComponent title="Blogs" path="blogs"/>
                <BlogPost>
                    {graphQLData.allDevArticles.edges.map(({ node }: Props) => {
                        const { article } = node;
                        return (
                            <div key={article.id}>
                                <p>{article.published_at}</p>
                                {
                                    article.tag_list.map((tag: string) => {
                                        return (
                                            <span style={{color: 'inherit'}} key={tag}>{tag}</span>
                                        )
                                    })
                                }
                                <Link to={`/blogs/${article.slug}`}>
                                    <h1>{article.title}</h1>
                                </Link>
                                <p>{article.description}</p>
                                <Link to={`/blogs/${article.slug}`}>
                                    Learn More
                                </Link>
                            </div>
                        )
                    })}
                </BlogPost>
                <div>
                    {
                        Array.from({ length: 3 }).map((_, i) => {
                            return (
                                <Link to={`/blogs/${i + 1}`} key={i}>
                                    {i + 1}
                                </Link>
                            )
                        })
                    }
                </div>
                <Footer/>
            </main>
        </Layout>
    )
};
export default IndexPage
export const Head: HeadFC = () => <title>Blogs - Oliver Kipkemei</title>
