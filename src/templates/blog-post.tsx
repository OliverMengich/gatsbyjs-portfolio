import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import TagListComponent from "../components/TagList.component";
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
}
export default function BlogPost({ data }: Props) {
    const { devArticles: { article },hashNodeUser,hashNodePost } = data;
    return (
        <Layout>
            <div style={{
                width:'100%'
            }}>
                <h1>{article.title}</h1>
                <h3 style={{color: '#ccc'}}>{new Date(article.published_at || hashNodePost?.dateAdded).toDateString()}</h3>
                <div style={{borderBottom: '1px solid #ccc',}}>
                    <div style={{width: '100%',textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
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
                    <h3 style={{color: '#ccc'}}>TAGS</h3>
                    <TagListComponent tags={article.tag_list} />
                    <Link style={{
                        display: 'inline-block',
                        textTransform: 'uppercase',
                        padding: '0.5rem',
                        fontWeight: 700,
                        color: '#007e6a',
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        }} to={`/blogs`}>
                        Back To Blog &rarr;
                    </Link>
                </div>
                {
                    article.body_markdown && <ReactMarkdown rehypePlugins={[remarkGfm]}>
                        {article.body_markdown}
                    </ReactMarkdown>
                }
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