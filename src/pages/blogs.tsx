import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
                <PageInfoComponent title="Blogs" path="blogs"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, officiis et non quisquam eveniet eligendi quis inventore cupiditate similique. Tempore.
                </p>
            </main>
        </Layout>
    )
};

export default IndexPage

export const Head: HeadFC = () => <title>Blogs - Oliver Kipkemei</title>
