import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";
import AboutMe from "../components/AboutMe/AboutMe.component";
import Footer from "../components/Footer/Footer.component";

const IndexPage: React.FC<PageProps> = () => {
    
    return (
        <Layout>
            <AboutMe imageUrl=""/>
            <Footer/>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Oliver Kipkemei</title>
