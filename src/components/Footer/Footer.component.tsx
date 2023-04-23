import React from "react";
import styled from 'styled-components';
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
const footerStyle = {
    backgroundColor: "#05242a",
    borderTop:'2px solid #ccc',
    color: "inherit",
    padding: "20px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
};
const FooterStyleUl = styled.ul`
    list-style: none;
    &li{
        font-size: 10px;
    }
`;
const footerSection = {
    // minWidth: '250px'
    margin: '0'
}
const titleSec = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    borderBottom: '2px solid white',
    maxWidth: '50%'
}
const SocialMedia = styled.div`
    display: flex;
    color: inherit;
    width: 50%;
    text-align: center;
    margin: 1rem 0;
    align-content: center;
`;

const SocialMediaA = styled.a`
    height: 35px;
    width: 35px;
    cursor: pointer;
    font-size: 1.5rem;
    margin: .5rem 0;
    border-radius: 50%;
    color: inherit;
    text-decoration: none;
    margin: 0 .5rem;
    padding: auto;
`
type Props={
    theme?:{
        backgroundColor: string,
        color: string,
        aboutMeTheme: {
            backgroundColor: string,
        },
    }
}
export default function Footer({theme}: Props){
    var date = new Date();
    const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day=days[date.getDay()]
    return(
        <footer style={{borderTop:'2px solid #ccc',
        backgroundColor: theme?.backgroundColor==='white'? "white": '#05242a',
        color: theme?.color,
        padding: "20px 0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",}}>
            <div style={footerSection}>
                <SocialMedia>
                    <SocialMediaA href="https://twitter.com/OllieKem7">
                        <FaTwitter/>
                    </SocialMediaA>
                    <SocialMediaA href="https://github.com/OliverMengich"><FaGithub/></SocialMediaA>
                    <SocialMediaA href="https://www.linkedin.com/in/oliver-arsenal"> <FaLinkedin/> </SocialMediaA>
                    <SocialMediaA href="mailto:oliverkemei2000@gmail.com"> <FaEnvelope/> </SocialMediaA>
                </SocialMedia>
            </div>
            <div style={footerSection}>
                <p>
                    &copy; 2023 Oliver Kipkemei | Have a good {day}
                </p>
            </div>
        </footer>
    )
}