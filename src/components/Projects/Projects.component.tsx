import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
const ProjectsContainer = styled.section`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: inherit;
`;
const ProjectTitle = styled.h3`
    font-weight: bold;
    color: inherit;
    font-family: 'Fruktur', cursive;
    display: inline-block;
`;
const ProjectItem = styled.div`
    padding: 1rem;
    width: 300px;
    background-color: #01181d;
    color: white;
    cursor: pointer;
    margin: 10px;
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
const LinkArrow = styled.span`
    margin-left: 5px;
    transition: 0.5s ease-out;
    font-size: 1.2rem;
    &:hover {
        color: #007e6a;
        transform: translateX(15px);
    }
`;
type ProjectsListProps = {
    projects: any[],
    theme?:{
        backgroundColor: string,
        color: string,
        aboutMeTheme: {
            backgroundColor: string,
        },
    }
};
function ProjectsList({projects, theme}: ProjectsListProps) {
    return (
        <ProjectsContainer >
            {
                projects.map((edge: any) => (
                    <ProjectItem style={{
                        backgroundColor: theme?.backgroundColor!== 'white'? '#01181d': 'white',
                        color: theme?.color
                        }}
                        key={edge.node.id}>
                        <ProjectTitle>{edge.node.title}</ProjectTitle> 
                        <Image fluid={edge.node.imageUrl.childImageSharp.fluid} alt={edge.node.title} />
                        <p style={{
                            color: theme?.color
                        }}>
                            {edge.node.description}
                        </p>
                        <Link style={{
                                display: 'inline-block',
                                textTransform: 'uppercase',
                                padding: '0.5rem',
                                fontWeight: 700,
                                color: '#007e6a',
                                fontSize: '1.2rem',
                                textDecoration: 'none',
                        }}  href={edge.node.url}>Learn More &rarr; </Link>
                    </ProjectItem>
                ))
            }
        </ProjectsContainer>
    );
}
export default ProjectsList;