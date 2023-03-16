import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
const Logo = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 2.8em;
    font-weight: 600;
`;
const typing = keyframes`
    0%{width: 0;}
    25%{width: 20vw;} 
    50%{width: 40vw;}
    75%{width: 20vw;}
    100%{ width: 0;}
`
const SpanLogo = styled.span`
    display: block;
    color: red;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: .05em;
    font-family: 'Fruktur', cursive;
    animation: ${typing} 8s steps(30, end) infinite;
`;
const AboutMeInfo = styled.section`
    display: flex;
    @media (max-width: 768px){
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;   |
    }

`;
const AboutMeInfo1 = styled(AboutMeInfo)`
    margin: 0 4em;
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
    color: white;
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
    color: white;
    width: 50%;
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
    color: white;
    text-decoration: none;
    margin: 0 .5rem;
    padding: auto;
    &::before{
        content: ☀;
        text-align: center;
    }
}`
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
            {/* <StaticImage style={{position: 'absolute',top:0,left: 0,width:'100%',height:'100%',opacity:'.3'}} height={500} src="../../images/hacker.jpg" alt="me" /> */}
            <AboutMeInfo1 >
                <aside style={{zIndex:'22', flex: 1, maxWidth: '50vw'}}>
                    <Logo>Hi,I'm Oliver.<SpanLogo onAnimationIteration={animationIterationFunc} >{description}</SpanLogo> </Logo>
                    <p style={{color: 'white', lineHeight: '1.7'}}>
                        I'm a Software developer based in Nairobi, Kenya. I'm
                        passionate about building software that solves real
                        problems.
                    </p>
                    <p style={{color: 'white'}}>Follow me on
                        <SocialMedia>
                            <SocialMediaA href="https://twitter.com/OllieKem7"> <FaTwitter/> </SocialMediaA>
                            <SocialMediaA href="https://github.com/OliverMengich"> <FaGithub/> </SocialMediaA>
                            <SocialMediaA href="https://www.linkedin.com/in/oliver-arsenal"> <FaLinkedin/> </SocialMediaA>
                            <SocialMediaA href="mailto:oliverkemei2000@gmail.com"> <FaEnvelope/> </SocialMediaA>
                        </SocialMedia>    
                    </p>
                </aside>
                <AboutMeImage>
                    <StaticImage style={{borderRadius:'50%', height:'auto', width: '100%'}} src="../../images/second_img1.png" alt="me" />
                </AboutMeImage>
            </AboutMeInfo1>
            <AboutMeInfo style={{ backgroundColor: '#01181d', color:'white',padding: '1rem'}}>
                <AboutMeImage>
                    <StaticImage style={{borderRadius: '100%', height: 'auto', width: '500px'}} src="../../images/second_img1.png" alt="me" />
                </AboutMeImage>
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
        </>
    )
}