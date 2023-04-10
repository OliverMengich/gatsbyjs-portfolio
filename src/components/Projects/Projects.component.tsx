import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
const ProjectsContainer = styled.section`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
`;
const ProjectTitle = styled.h3`
    font-weight: bold;
    color: #fff;
    font-family: 'Fruktur', cursive;
    display: inline-block;
`;
const ProjectItem = styled.div`
    padding: 1rem;
    width: 300px;
    background-color: #01181d;
    color: white;
    cursor: pointer;
    margin: 0 1rem;
    font-family: 'Fruktur', cursive;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: white;
`;
const LinkArrow = styled.span`
    margin-left: 5px;
    transition: 0.5s ease-out;
    font-size: 1.2rem;
    &:hover {
        color: #007e6a;
        transform: translateX(15px);
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;
function ProjectsList() {
    return (
        <ProjectsContainer >
            <ProjectItem>
                <ProjectTitle>GraphQL Bidder</ProjectTitle>  
                <p>
                    A realtime bidder that uses GraphQL subscriptions to
                    update the UI in realtime. The bidder is built using
                    React, Prisma, Postgres Apollo Client, GraphQL, and NodeJS.
                </p>
                <Link href="https://github.com/golcarecircle/care_circle">Learn More &rarr; </Link>
            </ProjectItem>
            <ProjectItem>
                <StaticImage src="../../images/lassiette.png" alt="L`Assiette Restaurant" />
                <ProjectTitle>L`Assiette Restaurant</ProjectTitle>
                <p>
                    A restaurant website built using NextJS, Typescript, PostgreSQL and
                    SaSS. for french dishes and allows users to order food online
                </p>
                <Link href="https://lassiette.vercel.app">Learn More &rarr; </Link>
            </ProjectItem>
            <ProjectItem>
                <StaticImage src="../../images/resume.png" alt="resume-maker" />
                <ProjectTitle>Resume Maker</ProjectTitle>
                <p>A free online tool to help
                    you create a professional resume in minutes. The tool is built using
                    NodeJs and Typescript
                </p>
                <Link href="https://github.com/OliverMengich/resume-maker">Learn More &rarr; </Link>
            </ProjectItem>
            <ProjectItem>
                <StaticImage src="../../images/portfolio.png" alt="Oliver Kipkemei" />
                <ProjectTitle>My Portfolio</ProjectTitle>
                <p>
                    My portfolio website built using GatsbyJS, Typescript, and SaSS.
                    The website is hosted on Netlify.
                </p>
                <Link href="https://gatsbyjsportfoliomain.gatsbyjs.io/">Learn More 
                    <LinkArrow>&rarr;</LinkArrow>
                </Link>
            </ProjectItem>
        </ProjectsContainer>
    );
}
export default ProjectsList;