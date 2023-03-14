import React from 'react';
import styled from 'styled-components';
const ProjectsContainer = styled.section`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
`;
const ProjectItem = styled.div`
    padding: 1rem;
    height: 300px;
    width: 300px;
    background-color: #01181d;
    color: white;
    margin: 0 1rem;
    font-family: 'Fruktur', cursive;
    border: 1px solid #ccc;
    border-radius: 15px;
`;
const Link = styled.a`
    text-decoration: none;
    color: white;
`;
function ProjectsList() {
    return (
        <ProjectsContainer >
            <ProjectItem>
                <h1>GraphQL Realtime Bidder</h1>
                <p>
                    A realtime bidder that uses GraphQL subscriptions to
                    update the UI in realtime. The bidder is built using
                    React, Apollo Client, GraphQL, and Node.js.
                </p>
                <Link href="https://github.com">Learn More &rarr; </Link>
            </ProjectItem>
            <ProjectItem>
                <h1>L`Assiette Restaurant</h1>
                <p>
                    A restaurant website built using NextJS, Typescript, PostgreSQL and
                    SaSS. The website is hosted on Vercel. This is a restaurant website
                    that sells french dishes and allows users to order food online
                </p>
                <Link href="https://github.com">Learn More &rarr; </Link>
            </ProjectItem>
            <ProjectItem>
                <h1>Resume Maker</h1>
                <p>A free online tool to help
                    you create a professional resume in minutes. The tool is built using
                    NodeJs and Typescript
                </p>
                <Link href="https://github.com">Learn More &rarr; </Link>
            </ProjectItem>
            <ProjectItem>
                <h1>My Portfolio</h1>
                <p>
                    My portfolio website built using GatsbyJS, Typescript, and SaSS.
                    The website is hosted on Netlify.
                </p>
                <Link href="https://github.com">Learn More &rarr; </Link>
            </ProjectItem>

        </ProjectsContainer>
    );
}
export default ProjectsList;