import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
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
                <div style={{width: '100%',minWidth: '500px'}} dangerouslySetInnerHTML={{ __html: html }} />
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