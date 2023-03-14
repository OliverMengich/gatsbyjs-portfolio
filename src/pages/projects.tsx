import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"
import ProjectsList from "../components/Projects/Projects.component"
const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
                <PageInfoComponent title="Projects" path="projects"/>
                <ProjectsList/>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Projects - Oliver Kipkemei</title>
