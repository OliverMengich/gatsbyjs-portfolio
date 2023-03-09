import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
                <PageInfoComponent path="About" title="About Me"/>
            </main>
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About - Oliver Kipkemei</title>
