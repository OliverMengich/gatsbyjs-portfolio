import React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import { Link } from "gatsby";
type Props = {
    data: {
        devArticles: {
            article: {
                id: string,
                title: string,
                url: string,
                body_html: string,
                published_at: Date,
                tag_list: string[],
                cover_image: string
                user: {
                    twitter_username: string
                    profile_image: string
                    name: string
                }
            }
        }
    }
}
export default function BlogPost({ data }: Props) {
    console.log(data);
    const { devArticles: { article } } = data;
    console.log(article);
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
                    >{new Date(article.published_at).toDateString()}</h3>
                    <h1>{article.title}</h1>
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
                        src={article.user.profile_image} alt={article.user.name} />
                        <h4>{article.user.name}</h4>
                        <Link style={{
                            textDecoration: 'none',
                            color: '#007e6a'
                        }} to={`https://twitter.com/${article.user.twitter_username}`}>
                            {article.user.twitter_username}
                        </Link>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
            </div>
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
                body_html
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
    }
`;