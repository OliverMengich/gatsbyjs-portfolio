import * as React from "react"
import { HeadFC, PageProps, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"
import ProjectsList from "../components/Projects/Projects.component";
import Footer from "../components/Footer/Footer.component";
const IndexPage: React.FC<PageProps> = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
        allProjectsJson {
            edges {
                node {
                    id
                    title
                    description
                    url
                    imageUrl {
                        childImageSharp {
                            fluid(maxWidth: 700) {
                                srcSet
                                src
                                base64
                                aspectRatio
                                sizes
                            }
                        }
                    }
                }
            }
        }
    }
    `)
    console.log(data);
    return (
        <Layout>
            <main>
                <PageInfoComponent title="Projects" path="projects"/>
                <ProjectsList
                    projects={data.allProjectsJson.edges}
                />
            </main>
            <Footer/>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Projects - Oliver Kipkemei</title>
