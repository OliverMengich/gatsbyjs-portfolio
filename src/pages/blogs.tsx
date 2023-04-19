import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"
import Footer from "../components/Footer/Footer.component";
import styled from "styled-components";
import { Link } from "gatsby";
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
        color: inherit;
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
const BlogElement = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
        color: inherit;
        margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
type Props = {
    
    article: {
        id: string,
        title: string,
        url: string,
        slug: string,
        description: string,
        published_at: string,
        tag_list: string,
        cover_image: string
    }
}

const IndexPage: React.FC<PageProps> = (data) => {
    const graphQLData= useStaticQuery(graphql`
        query MyQueryX {
            allDevArticles {
                nodes {
                    article {
                        slug
                        id
                        title
                        url
                        tag_list
                        description
                        published_at(formatString: "MMMM DD, YYYY"),
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
                    {graphQLData.allDevArticles.nodes.map(({article}:Props) => {
                        return (
                            <BlogElement style={{ display:'flex',width:'100%',justifyContent:'space-between',borderBottom:'1px solid #ccc', }} key={article.id}>
                                <h3>{article.published_at.toLocaleUpperCase()}</h3>
                                <div>
                                    {
                                        article.tag_list.split(',').map((tag: string) => {
                                            return (
                                                <h4 style={{
                                                    display: 'inline-block',
                                                    textTransform: 'uppercase',
                                                    padding: '0.5rem',
                                                    fontSize: 'calc(10px + 0.5vw)',
                                                    fontWeight: 700,
                                                    color: '#007e6a'}} key={tag}>{tag}</h4>
                                            )
                                        })
                                    }
                                    <Link style={{margin:'0', color:'inherit'}} to={`/blogs/${article.slug}`}>
                                        <h1
                                            style={{
                                                fontSize: 'calc(20px + 1vw)',
                                                fontWeight: 700,
                                                margin: 0,
                                                color: 'inherit',
                                                marginBottom: '1rem',
                                            }}
                                        >{article.title}</h1>
                                    </Link>
                                    <p>{article.description}</p>
                                    <Link style={{
                                        display: 'inline-block',
                                        textTransform: 'uppercase',
                                        padding: '0.5rem',
                                        fontWeight: 700,
                                        color: '#007e6a',
                                        fontSize: '1.2rem',
                                        textDecoration: 'none',
                                        }} to={`/blogs/${article.slug}`}>
                                        Learn More &rarr;
                                    </Link>
                                </div>
                            </BlogElement>
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
