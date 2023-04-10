import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
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
    imageUrl: string
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
export default function AboutMe(props: Props){
    var descriptions = ['Backend Developer', 'Frontend Developer', 'Fullstack Developer', 'Web3 Developer',"DevOps Entusiast"];
    const [description, setDescription] = React.useState<string>(descriptions[0]);
    const animationIterationFunc = () => {
        var index = descriptions.indexOf(description);
        if(index === descriptions.length-1){
            setDescription(descriptions[0]);
            
        }else{
            setDescription(descriptions[index+1]);
        }
    }
    return(
        <>
            <AboutMeInfo1 >
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
                    <StaticImage style={{borderRadius:'50%', height:'auto', width: '100%'}} src="../../images/second_img1.png" alt="me" />
                </AboutMeImage>
            </AboutMeInfo1>
            <AboutMeInfo style={{ backgroundColor: '#01181d', color:'inherit',padding: '1rem'}}>
                <AboutMeImage>
                    <StaticImage style={{borderRadius: '100%', height: 'auto', width: '500px'}} src="../../images/second_img1.png" alt="me" />
                </AboutMeImage>
                <aside style={{flex:1, color: 'inherit'}}>
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
        </>
    )
}