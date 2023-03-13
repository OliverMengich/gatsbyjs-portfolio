import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";
import styled from 'styled-components'
import PageInfoComponent from "../components/PageInfo/PageInfo.component"
import { StaticImage } from "gatsby-plugin-image"
const AboutMeInfo = styled.section`
    position: relative;
    display: flex;
`;
const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
                <PageInfoComponent path="About" title="About Me"/>
                <AboutMeInfo style={{ backgroundColor: '#01181d', color:'white',padding: '1rem'}}>
                    <aside style={{flex:1}}>
                        <StaticImage style={{borderRadius: '50%'}} height={400} src="../images/second_img1.png" alt="me" />
                    </aside>
                    <aside style={{flex:1}}>
                        <h4>My Biography</h4>
                        <h3>Software Developer</h3>
                        <p >
                            I'm a software developer based in Nairobi, Kenya. I'm
                            passionate about building software that solves real
                            problems.
                        </p>
                        <ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap', borderTop:'1px solid #ccc'}}>
                            <li style={{margin: '.5rem .2rem'}}>
                                <strong>Website: </strong>
                                <span>www.oliverkipkemei.me</span>
                            </li>
                            <li style={{margin: '.5rem .2rem'}}>
                                <strong>Phone: </strong>
                                <span>+254 741954425</span>
                            </li>
                            <li style={{margin: '.5rem .2rem'}}>
                                <strong>City: </strong> 
                                <span>Nairobi, Kenya</span>
                            </li>
                            <li style={{margin: '.5rem .2rem'}}>
                                <strong>Degree: </strong>
                                <span>Bachelors in Mechatronics Engineering</span>
                            </li>
                            <li style={{margin: '.5rem .2rem'}}>
                                <strong>Email: </strong>
                                <span>oliverkemei2000@gmail.com</span>
                            </li>
                        </ul>
                    </aside>
                </AboutMeInfo>
                <AboutMeInfo>
                    <h3>Experiences</h3>
                </AboutMeInfo>      
            </main>
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About - Oliver Kipkemei</title>
