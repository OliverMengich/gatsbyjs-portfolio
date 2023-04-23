import React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
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
    return (
        <Layout>
            <div>
                <div style={{
                    borderBottom: '1px solid #ccc',
                }}>
                    <h3
                        style={{
                            color: '#ccc',
                        }}
                    >{new Date(dateAdded).toDateString().toUpperCase()}</h3>
                    <h1>{title}</h1>
                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                            }}
                            
                        src={photo} alt={name} />
                        <h4 style={{display: 'block'}}>{name}</h4>
                        <Link style={{
                            textDecoration: 'none',
                            color: '#007e6a'
                        }} to={`https://twitter.com/OllieKem7`}>
                            {name}
                        </Link>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
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