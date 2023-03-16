import React from "react";
import styled from 'styled-components';
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaFilePdf } from "@react-icons/all-files/fa/FaFilePdf";
import { FaWhatsapp }from "@react-icons/all-files/fa/FaWhatsapp";
import {FaLocationArrow} from "@react-icons/all-files/fa/FaLocationArrow";
const footerStyle = {
    backgroundColor: "#05242a",
    color: "white",
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
};
const FooterStyleUl = styled.ul`
    list-style: none;
    &li{
        font-size: 10px;
    }
`;
const footerStyleLi = {

}
const footerSection = {
    width: '30%'
}
const titleSec = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    borderBottom: '2px solid white',
    maxWidth: '50%'
}
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
    cursor: pointer;
    font-size: 1.5rem;
    margin: .5rem 0;
    border-radius: 50%;
    color: white;
    text-decoration: none;
    margin: 0 .5rem;
    padding: auto;
}`
const NavMediaA = styled.a`
    cursor: pointer;
    margin: .5rem 0;
    color: white;
    text-decoration: none;
    margin: 0 .5rem;
    padding: auto;
}`
export default function Footer(){
    return(
        <footer style={footerStyle}>
            <div style={footerSection}>
                <h4 style={titleSec}>Oliver Kipkemei</h4>
                <p>
                    I'm a software developer based in Nairobi, Kenya. I'm
                    passionate about building software that solves real
                    problems.
                </p>
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
                <h4 style={titleSec}>Navigation</h4>
                <FooterStyleUl>
                    <li>
                        <NavMediaA href="/"> <FaLocationArrow/> Home</NavMediaA>
                    </li>
                    <li>
                        <NavMediaA href="/about"> <FaLocationArrow/> About</NavMediaA>
                    </li>
                    <li>
                        <NavMediaA href="/blogs"> <FaLocationArrow/> Blogs</NavMediaA>
                    </li>
                    <li>
                        <NavMediaA href="/contact"> <FaLocationArrow/> Contact</NavMediaA>
                    </li>
                </FooterStyleUl>
            </div>
            <div style={footerSection}>
                <h4 style={titleSec}>Contact Me</h4>
                <FooterStyleUl>
                    <li> <FaPhone/> +(254)-741-954-425</li>
                    <li> <FaWhatsapp/> </li>    
                    <li> <FaFilePdf/> Download Resume </li>    
                </FooterStyleUl>
            </div>
        </footer>
    )
}