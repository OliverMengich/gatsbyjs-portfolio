import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
                <h1>Projects page</h1>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Projects - Oliver Kipkemei</title>
