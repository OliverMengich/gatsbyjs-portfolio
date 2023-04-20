import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/Footer/Footer.component";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { BsGeoAlt } from "@react-icons/all-files/bs/BsGeoAlt";
import{ FaGlobeAsia } from '@react-icons/all-files/fa/FaGlobeAsia'
const AboutMeInfo = styled.section`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto; 
    @media(max-width: 768px){
        align-items: center;
        flex-direction: column;
    }
`;
const Description = styled.div`{
    &>*{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    padding: 10px;
    position: relative;
    border-left: 3px solid black;
    margin: 1rem;
    color: inherit;
    &::before{
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50px;
        left: -8px;
        top: -8px;
        background-color: black;
    }
`;
const DateInfo = styled.h3`
    top: 0;
    right: 0;
    display: inline-block;
    padding: .4vw;
    background: #ccc;
    color: black;
    &>*{
        margin: 0;
        padding: 0;
    }
`;
const Logo = styled.h1`
    font-size: calc(1.5rem + 1vw);
    font-weight: bold;
    color: inherit;
    font-family: 'Fruktur', cursive;
    margin: 0;
`;
const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: inherit;
    text-align: center;
    margin: 0 auto;
}`;

const SocialMediaA = styled.a`
    height: 35px;
    width: 35px;
    font-size: 1.5rem;
    margin: .5rem 0;
    border-radius: 50%;
    color: inherit;
    text-decoration: none;
    margin: 0 .5rem;
    padding: auto;
    &::before{
        content: ☀;
        text-align: center;
    }
}`
const ResumeButton = styled.a`
    text-decoration: none;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    padding: .5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0;
    transition: all .2s ease-in-out;
    cursor: pointer;
    &:hover{
        background: #000;
        color: #fff;
    }
`;
const AboutPage: React.FC<PageProps> = () => {
    const technicalSkills=[
        {
            title:'Languages:  ',
            skills: ['Javascript', 'Typescript','HTML5', 'CSS3', 'SQL', 'Solidity']
        },
        {
            title: 'Frameworks and Database:  ',
            skills: ['React','Next.js', 'Node.js', 'Express.js', 'ChakraUI','MySQL, MongoDB and PostgreSQL databases']
        },
        {
            title: 'Tools and Skills:  ',
            skills:['Git', 'GitHub','IoT', 'Docker','Azure DevOps','Power Virtual Agents', 'Azure', 'Heroku', 'Digital Ocean' ,'tRPC', 'GraphQL', 'Netlify', 'Linux', 'Microservices', 'REST and GraphQL APIs', 'Automation Testing(Manual and Automated) with Cypress', 'Jest', 'Chai', 'Mocha', 'CircleCI and GitHub actions', 'Technical Writing.']
        },
        {
            title:'Cyber Security:  ',
            skills:[' Linux', ' Windows',' Networking',' Active Directory','Kerberos']
        }
    ]
    let theme= 'dark';
    return (
        <Layout>
            <AboutMeInfo style={{ backgroundColor: '#01181d', color:'white',padding: '1rem'}}>
                <aside>
                    <StaticImage style={{borderRadius: '50%', minWidth:'300px'}} height={400} src="../images/second_img1.png" alt="me" />
                </aside>
                <aside style={{maxWidth: '900px', textAlign: 'center'}}>
                    <h3>SOFTWARE DEVELOPER</h3>
                    <SocialMedia>
                        <SocialMediaA href="https://twitter.com/OllieKem7"> <FaTwitter/> </SocialMediaA>
                        <SocialMediaA href="https://github.com/OliverMengich"> <FaGithub/> </SocialMediaA>
                        <SocialMediaA href="https://www.linkedin.com/in/oliver-arsenal"> <FaLinkedin/> </SocialMediaA>
                        <SocialMediaA href="mailto:oliverkemei2000@gmail.com"> <FaEnvelope/> </SocialMediaA>
                        <SocialMediaA href="https://oliverkipkemei.me"> <FaGlobeAsia/> </SocialMediaA>
                    </SocialMedia> 
                    <ResumeButton >
                        DOWNLOAD RESUME
                    </ResumeButton>
                    <p >
                        Hello World! My name is Oliver Kipkemei. I’m a Software Engineer, Technical article writer and a community advocate.
                        As an active member of the tech community, I have made significant contributions through my roles as an author, Web Dev, Microsoft Learn Student Ambassador. 
                    </p>
                    <p>
                        Additionally, I share my expertise as an Developer for WaziUp. Through these roles, I strive to empower and inspire individuals to learn and grow in the tech ecosystem
                    </p>
                    <ul style={{listStyle: 'none', textAlign:'start', borderTop:'1px solid #ccc'}}>
                        {
                            technicalSkills.map((skill)=>{
                                return(
                                    <li>
                                        <h3 style={{display:'inline-block'}} >{skill.title} </h3>
                                        {
                                            skill.skills.map(sk=><span> {sk}, </span>)
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </aside>
            </AboutMeInfo>
            <AboutMeInfo>
                <div>
                    <Logo>Summary</Logo>
                    <Description>
                        <h2>OLIVER KIPKEMEI</h2>
                        <span>Software Developer</span>
                        <p>
                            Innovative and deadline-driven Developer with experience in designing and developing user-centered websites and webapps from initial concept to final, polished deliverable
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            margin: '0 10px',
                        }}>
                            <li>(254) 741954425</li>
                            <li>(254) 783891197</li>
                            <li>oliverkemei2000@gmail.com</li>
                        </ul>
                    </Description>
                    <div>
                        <Logo>Education</Logo>
                        <Description>
                            <h2>BSc Mechatronics Engineering</h2>
                            <DateInfo>2018 - 2023</DateInfo>
                            <h4>Dedan Kimathi University</h4>
                            <p>Mechatronics Engineering blends so well with IT and Me pursue this course with the desire to graduate with requisite skills for the demanding environment and competetive job market</p>
                        </Description>
                    </div>
                </div>
                <div>
                    <Logo>Work Experience</Logo>
                    <Description>
                        <h2>IOT Developer Intern</h2>
                        <DateInfo>2023- Ongoing</DateInfo>
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
                        <DateInfo>10/2021-02/2022</DateInfo>
                        <h4>Africa Blockchain Univeristy</h4>
                        <p>
                            Developing a web application for the Africa Blockchain and working 
                            with ABU partners
                        </p>
                    </Description>
                </div>
            </AboutMeInfo> 
            <Footer/>    
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About - Oliver Kipkemei</title>
