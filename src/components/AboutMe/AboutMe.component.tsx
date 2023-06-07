import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaFilePdf } from "@react-icons/all-files/fa/FaFilePdf";
import { FaWhatsapp }from "@react-icons/all-files/fa/FaWhatsapp";
import {FaLocationArrow} from "@react-icons/all-files/fa/FaLocationArrow";
import { Link, graphql, useStaticQuery } from 'gatsby';
import TagListComponent from '../TagList.component';
const Logo = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 2.8em;
    font-weight: 600;
`;
const typing = keyframes`
    0%{width: 0;}
    25%{width: 30vw;} 
    50%{width: 70vw;}
    75%{width: 30vw;}
    100%{ width: 0;}
`;
const SpanLogo = styled.span`
    display: block;
    color: red;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: .05em;
    font-size: calc(1.5rem + 2vw);
    font-family: 'Fruktur', cursive;
    animation: ${typing} 8s steps(30, end) infinite;
`;
const AboutMeInfo = styled.section`
    display: flex;
    @media (max-width: 768px){
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }
`;
const AboutMeInfo1 = styled(AboutMeInfo)`
    margin: 0 4em;
    @media (max-width: 768px){
        margin: 0 2em;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;
const AboutMeImage = styled.aside`
    min-width: 300px;
`
type Props = {
    imageUrl: string,
    theme?:{
        backgroundColor: string,
        color: string,
        aboutMeTheme: {
            backgroundColor: string,
        },
    }
}
const Button = styled.button`
    padding: 10px 20px;
    border-radius: 25px;
    width: 120px;
    background-color: #007e6a;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    margin-right: 10px;
    cursor: pointer;
    border: none;
`;
const Button1 = styled(Button)`
    background-color: rgb(.1, 1, 30);
`;
const SocialMedia = styled.div`
    display: flex;
    width: 50%;
    color: inherit;
    text-align: center;
    margin: 1rem 0;
    align-content: center;
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
const AboutMeAside = styled.aside`
    flex: 1;
    max-width: 50vw;
    @media (max-width: 768px){
        width: 100%;
        margin: 0 .5em;
        max-width: 100vw;
    }
`;
const BlogCard = styled.div`
    background-color: ${props => props.theme.aboutMeTheme.backgroundColor};
    color: ${props => props.theme.color};
    padding: .1rem .8em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    
    align-items: center;
    border-radius: 4px;
    margin: 1em;
    width: 300px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    border: 2px solid #fff;
    border-color: red #00FF00 rgb(0, 0, 255) hsl(240, 100%, 50%);
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.01);
    }
`;
const SkillsCard = styled.div`
    background-color: ${props => props.theme.aboutMeTheme.backgroundColor};
    color: ${props => props.theme.color};
    box-sizing: border-box;
    border-radius: 10px;
    margin: 1em;
    width: 300px;
    height: 420px;
    border: 1px solid #fff;
    border-color: red #00FF00 rgb(0, 0, 255) hsl(240, 100%, 50%);
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.01);
    }
    
`;
const BlogsSkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    alignItems: center;
`;
const skillExperience = [
    {
        skill: 'Frontend Development',
        svg: "<svg style={{color: 'red', height: '50px',margin: '10px', textAlign: 'center'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path fill-rule='evenodd' d='M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z' clip-rule='evenodd'></path></svg>",
        description: [
            '2+ years of experience with Javascript frameworks',
            'Used Gatsby.js and other Static Site generators to build and deploy static sites such as this blog',
            'Used React.js to build and deploy web applications',
            'Experience with meta-frameworks such as Next.js to build SSR apps',
            'Used platforms such as Vercel, Netlify and Github pages to deploy websites and web apps',
            'Experience with CSS frameworks such as TailwindCSS and Bootstrap',

        ]
    },
    {
        skill: 'Backend Development',
        svg: "<svg style={{color: 'red', height: '80px',margin: '10px', textAlign: 'center'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path d='M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z'></path><path fill-rule='evenodd' d='M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z' clip-rule='evenodd'></path></svg>",
        description: [
            '2+ years of experience with backend development',
            'Experience with Node.js and Express.js to build REST APIs',
            'Experience with GraphQL and Apollo to build GraphQL APIs',
            'Experience with MongoDB and Mongoose to build and manage databases',
            'Experience with Firebase to build and manage databases',
            'Experience with platforms such as Heroku and Vercel to deploy backend applications',
            'Experience with platforms such as MongoDB Atlas and Firebase to manage databases',
        ]
    },
    {
        skill: 'DevOps',
        svg:"<svg style={{color: 'rgb(34, 211, 238)', height: '80px',margin: '10px', textAlign: 'center'}}  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path fill-rule='evenodd' d='M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z' clip-rule='evenodd'></path></svg>",
        description: [
            'Experience with Docker to containerize applications',
            'Experience with creating CI/CD pipelines for various apps',
            'Experience with Kubernetes to manage containerized applications',
            'Good knowledge of shell scripting and experience with linux/unix systems',
            'Experience with platforms such as Heroku and Vercel to deploy applications',
        ],
    },
    {
        skill: 'Web3 Development',
        svg: '',
        description: [
            'Experience with Solidity to build smart contracts',
            'Experience with Web3.js to interact with smart contracts',
            'Experience with platforms such as Polygon and Ethereum to deploy smart contracts',
            'Experience with platforms such as The Graph to query smart contracts',
        ],
    },
    {
        skill: 'App Development',
        svg: "<svg style={{color: 'rgb(34, 211, 238)', height: '80px',margin: '10px', textAlign: 'center'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true' ><path d='M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'></path><path fill-rule='evenodd' d='M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z' clip-rule=evenodd'></path></svg>",
        description: [
            'Experience with React Native to build cross-platform mobile apps',
            'Experience with platforms such as Expo to build and deploy mobile apps',
        ],
    },
    {
        skill: 'Other Skills',
        svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path fill-rule='evenodd' d='M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z' clip-rule='evenodd'></path><path fill-rule='evenodd' d='M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd'></path></svg>",
        description: [
            'I enjoy soccer, basketball, and video games',
            'I enjoy reading books and watching movies',
            'I enjoy learning new things',
        ],
    },
]
export default function AboutMe({theme}: Props){
    const graphQLData= useStaticQuery(graphql`
        query MyQueryX {
            allDevArticles {
                nodes {
                    article {
                        slug
                        id
                        title
                        url
                        tag_list
                        description
                        published_at(formatString: "MMMM DD, YYYY"),
                    }
                }
            }
            allHashNodePost {
                nodes {
                    slug
                    title
                    brief
                    id
                    dateAdded
                }
            }
        }
    `);
    var descriptions = ['Technical Blogger','Backend Developer', 'Frontend Developer', 'Fullstack Developer', 'Web3 Developer',"DevOps Entusiast"];
    const [description, setDescription] = React.useState<string>(descriptions[0]);
    const animationIterationFunc = () => {
        var index = descriptions.indexOf(description);
        if(index === descriptions.length-1){
            setDescription(descriptions[0]);
            
        }else{
            setDescription(descriptions[index+1]);
        }
    }
    const SVG1=()=>(
        <svg style={{color: 'red', height: '80px',margin: '10px', textAlign: 'center'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path fill-rule='evenodd' d='M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z' clip-rule='evenodd'></path></svg>
    )
    const SVG2=()=>(
        <svg style={{color: 'rgb(74, 222, 128)', height: '80px',margin: '10px', textAlign: 'center'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path d='M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z'></path><path fill-rule='evenodd' d='M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z' clip-rule='evenodd'></path></svg>
    )
    const SVG3=()=>(
        <svg style={{color: 'rgb(34, 211, 238)', height: '80px',margin: '10px', textAlign: 'center'}}  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path fill-rule='evenodd' d='M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z' clip-rule='evenodd'></path></svg>
    )
    const SVG4=()=>(
        <svg style={{color: 'rgb(250, 204, 21)', height: '80px',margin: '10px', textAlign: 'center'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true' ><path d='M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'></path><path fill-rule='evenodd' d='M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z' clip-rule='evenodd'></path></svg>
    )
    const SVG5=()=>(
        <svg style={{color: 'rgb(250, 204, 21)', height: '80px',margin: '10px', textAlign: 'center'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'><path fill-rule='evenodd' d='M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z' clip-rule='evenodd'></path><path fill-rule='evenodd' d='M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd'></path></svg>
    )
    return(
        <>
            <AboutMeInfo1>
                <AboutMeAside>
                    <Logo>Hi,I'm Oliver.<SpanLogo onAnimationIteration={animationIterationFunc} >{description}</SpanLogo> </Logo>
                    <p style={{color: 'inherit', lineHeight: '1.7', maxWidth:'80%'}}>
                        I'm a Software developer based in Nairobi, Kenya. I'm
                        passionate about building software that solves real
                        problems.
                    </p>
                    <p style={{color: 'inherit'}}>Follow me on
                        <SocialMedia>
                            <SocialMediaA href="https://twitter.com/OllieKem7"> <FaTwitter/> </SocialMediaA>
                            <SocialMediaA href="https://github.com/OliverMengich"> <FaGithub/> </SocialMediaA>
                            <SocialMediaA href="https://www.linkedin.com/in/oliver-arsenal"> <FaLinkedin/> </SocialMediaA>
                            <SocialMediaA href="mailto:oliverkemei2000@gmail.com"> <FaEnvelope/> </SocialMediaA>
                        </SocialMedia>    
                    </p>
                </AboutMeAside>
                <AboutMeImage>
                    <StaticImage style={{borderRadius:'50%', height:'auto', width: '100%'}} src="../../images/oliverimg.png" alt="me" />
                </AboutMeImage>
            </AboutMeInfo1>
            <h1 style={{textAlign: 'center'}}>Featured Blogs</h1>
            <BlogsSkillsContainer>
                {
                    graphQLData.allDevArticles.nodes.map((node: any,idx: number) => {
                        if (idx<3) {
                            return(
                                <BlogCard theme={theme} key={node.article.id}>
                                    <h2 style={{fontSize: '1rem'}}>{node.article.title}</h2>
                                    <div>
                                        <p style={{fontSize: '.9rem'}}>{node.article.description}</p>
                                        <p style={{fontSize: '.8rem'}}>{new Date(node.article.published_at).toDateString()}</p>
                                        {
                                            node.article.tag_list.split(',').map((tag: string) => {
                                                return (
                                                    <h4 style={{
                                                        display: 'inline-block',
                                                        textTransform: 'uppercase',
                                                        padding: '1px',
                                                        fontSize: '.7rem',
                                                        color: '#007e6a'
                                                    }} key={tag}>#{tag}</h4>
                                                )
                                            })
                                        }
                                    </div>
                                    <Link style={{
                                        display: 'block',
                                        textTransform: 'uppercase',
                                        fontWeight: 500,
                                        color: '#007e6a',
                                        fontSize: '50%',
                                        textDecoration: 'none',
                                        }} to={`${node.article.url}`}>
                                        Learn More &rarr;
                                    </Link>
                                </BlogCard>
                            )
                        }
                    })
                }
            </BlogsSkillsContainer>
            <h1 style={{textAlign: 'center'}}>Skills and Experience</h1>
            <BlogsSkillsContainer>
                {
                    skillExperience.map((skill: any, id: number) => (
                        <SkillsCard style={{border: '1px solid #ccc',}}  key={id}>
                            <div style={{textAlign: 'center'}}>
                                {(id===0) ?<SVG1/>:''}
                                {id===1? <SVG2/>:''}
                                {id===2? <SVG3/>:''}
                                {id===3? <SVG3/>:''}
                                {id===4? <SVG4/>:''}
                                {id===5 ? <SVG5/> :''}
                                <h3>{skill.skill}</h3>
                            </div>
                            {skill.description.map((desc: string) => (
                                <div style={{display: 'flex', boxSizing: 'border-box', margin:0,padding:0}}>
                                    <svg style={{color: '#006a5a', height: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
                                    <p style={{ fontSize: '60%'}}>{desc}</p>
                                </div>
                            ))}
                        </SkillsCard>
                    ))
                }
            </BlogsSkillsContainer>
        </>
    )
}