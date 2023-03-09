import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 2.8em;
    font-weight: 600;
`;
const SpanLogo = styled.span`
    display: block;
    color: red;
    font-family: 'Fruktur', cursive;
`;
const AboutMeInfo = styled.section`
    position: relative;
    display: flex;
`;
const AboutMeImage = styled.aside`
    flex: 1;
    @media and screen (min-width: 768px){
        position: absolute;
        top: 0;
        right: 0;
    }
`
type Props = {
    imageUrl: string
}
const Button = styled.button`
    padding: 10px 20px;
    border-radius: 25px;
    width: 120px;
    background-color: rgb(1, 1, 41);
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    margin-right: 10px;
    cursor: pointer;
    border: none;
`;
const Button1 = styled.button`
    padding: 10px 20px;
    border-radius: 25px;
    width: 120px;
    background-color: rgb(.1, 1, 30);
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    margin-right: 10px;
    cursor: pointer;
    border: none;
`;
const SocialMedia = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
    width: 50%;
    text-align: center;
    align-content: center;
}`;
const SocialMediaA = styled.a`
    background: rgb(247 120 60 / 16%);
    height: 35px;
    width: 35px;
    border-radius: 50%;
    color: white;
    text-align: center;
    margin: 0 1rem;
    &::before{
        content: ☀;
        text-align: center;
    }
}`
export default function AboutMe(props: Props){
    return(
        <>
            <AboutMeInfo style={{margin: '0 4em',}}>
                <aside style={{flex:1}}>
                    <Logo>I'm Oliver.<SpanLogo>Backend Developer</SpanLogo> </Logo>
                    <p style={{color: 'white', lineHeight: '1.7'}}>
                        I'm a software developer based in Nairobi, Kenya. I'm
                        passionate about building software that solves real
                        problems. I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your business a new Creative start right away!
                    </p>
                    <div>
                        <Button>Hire Me</Button>
                        <Button1>My Portfolio</Button1>
                    </div>
                    <p style={{color: 'white'}}>Follow me on
                        <SocialMedia>
                            <SocialMediaA href="https://twitter.com/OllieKem7"></SocialMediaA>
                            <SocialMediaA href="https://github.com/OliverMengich"></SocialMediaA>
                            <SocialMediaA href="https://www.linkedin.com/in/oliver-arsenal"></SocialMediaA>
                        </SocialMedia>    
                    </p>
                </aside>
                <AboutMeImage style={{flex:1}}>
                    <StaticImage style={{borderRadius: '50%'}} height={500} src="../../images/second_img1.png" alt="me" />
                </AboutMeImage>
            </AboutMeInfo>
            <AboutMeInfo style={{ backgroundColor: 'rgb(.1, 1, 30)', color:'white',padding: '1rem'}}>
                <aside style={{flex:1}}>
                    <StaticImage style={{borderRadius: '50%'}} height={500} src="../../images/second_img1.png" alt="me" />
                </aside>
                <aside style={{flex:1}}>
                    <h4>My Biography</h4>
                    <h3>Software Developer</h3>
                    <p >
                        I'm a software developer based in Nairobi, Kenya. I'm
                        passionate about building software that solves real
                        problems.
                    </p>
                    <ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap'}}>
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
        // <section>
        //     <Avatar src={props.imageUrl} alt=""/>
        //     <div>
        //         <h1 >Hi, I'm <span>Oliver Kipkemei</span> a <h1>Backend Developer</h1></h1>
        //         <p>
        //             I'm a software developer and a student at Dedan kimathi university. I'm currently in my final year of study. I'm passionate about software development and I'm always looking for opportunities to learn and grow.
        //         </p>
        //     </div>
        // </section>
    )
}