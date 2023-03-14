import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/Footer/Footer.component";
const AboutMeInfo = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
`;
const Description = styled.div`{
    &>*{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    padding: 10px;
    position: relative;
    border-left: 3px solid blue;
    margin: 1rem;
    color: white;
    &::before{
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50px;
        left: -8px;
        top: -8px;
        background: blue;
    }
`;
const Logo = styled.h1`
    font-size: 2vw;
    font-weight: bold;
    color: #fff;
    font-family: 'Fruktur', cursive;
    margin: 0;
`;
const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
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
                    <div>
                        <Logo>Summary</Logo>
                        <Description>
                            <h2>Oliver Kipkemei</h2>
                            <span>05/2018-05/2023</span>
                            <ul>
                                <li>Dedan Kimathi University</li>
                                <li>(254) 741954425</li>
                                <li>(254) 783891197</li>
                                <li>oliverkemei2000@gmail.com</li>
                            </ul>
                        </Description>
                        <div>
                            <Logo>Education</Logo>
                            <Description>
                                <h2>BSc Mechatronics Engineering</h2>
                                <span>05/2018-05/2023</span>
                                <h4>Dedan Kimathi University</h4>
                                <p>Mechatronics Engineering blends so well with IT and Me pursue this course with the desire to graduate with requisite skills for the demanding environment and competetive job market</p>
                            </Description>
                        </div>
                    </div>
                    <div>
                        <Logo>Work Experience</Logo>
                        <Description>
                            <h2>IOT Developer Intern</h2>
                            <span>03/2023- Ongoing</span>
                            <h4>WaziUp</h4>
                            <p>
                                Developing IoT solutions for the WaziUp platform
                                using Microcontrollers, and IoT sensors. And a web
                                application for the platform using React and
                                Typescript.
                            </p>
                        </Description>
                        <Description>
                            <h2>Web Developer</h2>
                            <span>10/2021-02/2022</span>
                            <h4>University of Nairobi</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum explicabo iure magni doloribus esse! Aspernatur corrupti necessitatibus praesentium iste?</p>
                        </Description>
                    </div>
                </AboutMeInfo> 
                <Footer/>    
            </main>
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About - Oliver Kipkemei</title>
