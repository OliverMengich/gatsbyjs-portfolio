import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { marked } from "marked";
import styled from "styled-components";
import Footer from "../components/Footer/Footer.component";
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
    color: inherit;
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
        color: inherit;
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
        color: inherit;
        margin: 0 5px;
        width: 100%;
        code{
            padding: 5px;
            background-color: #ccc;
            border-radius: 5px;
            font-family: monospace;
            color: inherit;
            margin: 5px 1px;
        }
    }
`;
type Props = {
    data: {
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
}
export default function BlogPost({ data }: Props) {
    const { hashNodePost: { childMarkdownRemark:{html},dateAdded, title }, hashNodeUser:{name,photo,username} } = data;
    const htmlContent = marked(html);
    return (
        <Layout>
            <div style={{display:'flex',alignItems:'center',justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
                <div style={{borderBottom: '1px solid #ccc',minWidth: '500px'}}>
                    <h3 style={{color: '#ccc'}}>{new Date(dateAdded).toDateString().toUpperCase()}</h3>
                    <h1>{title}</h1>
                    <div style={{width: '100%', textAlign: 'center', display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                        <img style={{width: '50px',height: '50px', borderRadius: '50%',}}src={photo} alt={name} />
                        <div>
                            <h4 style={{display: 'block'}}>{name}</h4>
                            <Link style={{
                                textDecoration: 'none',
                                color: '#007e6a'
                            }} to={`https://twitter.com/OllieKem7`}>
                                OllieKem7
                            </Link>
                        </div>
                    </div>
                </div>
                <BlogMarkdown dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
            <Footer />
        </Layout>
    )
}
export const query = graphql`
    query ($id: String!) {
        hashNodePost(id: {eq: $id}) {
            slug
            title
            dateAdded
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