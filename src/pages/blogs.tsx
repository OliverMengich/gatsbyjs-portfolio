import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
                <PageInfoComponent title="Blogs" path="blogs"/>
            </main>
        </Layout>
    )
};

export default IndexPage

export const Head: HeadFC = () => <title>Blogs - Oliver Kipkemei</title>
