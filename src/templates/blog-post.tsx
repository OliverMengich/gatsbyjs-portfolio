import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import TagListComponent from "../components/TagList.component";
import styled from "styled-components";
import { marked } from "marked";
import Footer from "../components/Footer/Footer.component";
type Props = {
    data: {
        devArticles: {
            article: {
                id: string,
                title: string,
                url: string,
                body_markdown?: string,
                published_at: Date,
                tag_list: string,
                cover_image: string,
                user: {
                    twitter_username: string
                    profile_image: string
                    name: string
                }
            }
        }
        hashNodePost: {
            id: string,
            title: string,
            body_html: string,
            dateAdded: Date,
            childMarkdownRemark: {
                html: string
            }
        }
        hashNodeUser: {
            name: string,
            username: string,
            photo: string
        }
    }
};
const BlogMarkdown = styled.pre`
    max-width: 768px;
    overflow-x: hidden;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    font-size: 1.1em;
    font-family: monospace;
    color: #000;
    margin: 0 5px;
    @media screen and (max-width: 768px) {
        overflow-x: hidden;
        width: 95vw;
    }
    pre{
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px;
        width: 100%;
        background-color: rgb(38, 38, 38);
        overflow-x: auto;
        border-radius: 5px;
        font-size: 10px;
        font-family: monospace;
        color: #000;
        margin: 0 5px;
        @media (max-width: 768px) {
            font-size: 10px;
        }
        code{
            padding: 0;
            background-color: transparent;
            border-radius: 0;
            font-family: monospace;
            color: rgb(127, 219, 202);
            margin: 0;
        }
    }
    p{
        padding: 10px;
        font-family: monospace;
        color: #000;
        margin: 0 5px;
        width: 100%;
        code{
            padding: 5px;
            background-color: #ccc;
            border-radius: 5px;
            font-family: monospace;
            color: inherit;
            margin: 0;
        }
    }
`;
export default function BlogPost({ data }: Props) {
    const { devArticles: { article },hashNodeUser,hashNodePost } = data;
    const markdown = marked(article.body_markdown|| '#No Content');
    return (
        <Layout>
            <div style={{
                width:'100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 10px',
                boxSizing: 'border-box',
            }}>
                <h1>{article.title}</h1>
                <h3 style={{color: '#ccc'}}>{new Date(article.published_at || hashNodePost?.dateAdded).toDateString()}</h3>
                <div style={{borderBottom: '1px solid #ccc',}}>
                    <div style={{ boxSizing: 'border-box', width: '100%',textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                        {
                            article && <img style={{ width: '50px', height: '50px',borderRadius: '50%',}}src={article.user.profile_image} alt={article.user.name} />
                        }
                        <div>
                            <h4>{article.user.name || hashNodeUser.name}</h4>
                            <Link style={{
                                textDecoration: 'none',
                                color: '#007e6a'
                            }} to={`https://twitter.com/${article.user.twitter_username||'OllieKem7'}`}>
                                {article.user.twitter_username|| hashNodeUser.name}
                            </Link>
                        </div>
                    </div>
                    <div style={{ boxSizing: 'border-box', width: '100%',textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                        <h3 style={{color: '#ccc', margin: 0,padding: 0}}>TAGS</h3>
                        <TagListComponent tags={article.tag_list} />
                        <Link style={{
                            display: 'inline-block',
                            color: '#007e6a',
                            fontSize: 'calc(10px + 0.5vw)',
                            textDecoration: 'none',
                            }} to={`/blogs`}>
                            &larr; Back To Blogs 
                        </Link>
                    </div>
                </div>
                {/* <div style={{width: '100%', boxSizing: 'border-box',}}> */}
                    <BlogMarkdown dangerouslySetInnerHTML={{__html: markdown}} />
                {/* </div> */}
            </div>
            <Footer />
        </Layout>
    )
}
export const query = graphql`
    query ($id: String!) {
        devArticles(id: { eq: $id }){
            id
            article {
                id
                title
                url
                tags
                body_markdown
                published_at
                tag_list
                social_image
                user {
                    twitter_username
                    profile_image
                    name
                }
            }
        }
        hashNodePost(id: {eq: $id}) {
            slug
            title
            childMarkdownRemark {
                html
            }
        }
        hashNodeUser {
            name
            username
            photo
        }
    }
`;