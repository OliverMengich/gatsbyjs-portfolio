import React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
type Props = {
    data: {
        devArticles: {
            article: {
                id: string,
                title: string,
                url: string,
                body_html: string,
                published_at: string,
                tag_list: string[],
                cover_image: string
            }
        }
    }
}
export default function BlogPost({ data }: Props) {
    const { devArticles: { article } } = data;
    console.log(article);
    return (
        <div>
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
        </div>
    )
}
export const query = graphql`
    query ($id: String!) {
        devArticles(id: { eq: $id }){
            article {
                id
                title
                url
                body_html
                published_at(formatString: "MMMM DD, YYYY"),
                tag_list,
                social_image
            }
        }
    }

`;