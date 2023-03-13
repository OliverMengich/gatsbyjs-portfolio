import React from "react";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaFilePdf } from "@react-icons/all-files/fa/FaFilePdf";
import { FaWhatsapp }from "@react-icons/all-files/fa/FaWhatsapp";
const footerStyle = {
    backgroundColor: "#007e6a",
    color: "white",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
export default function Footer(){
    return(
            <footer style={footerStyle}>
                <div>
                    <h4>Oliver Kipkemei</h4>
                    <p>
                        I'm a software developer based in Nairobi, Kenya. I'm
                        passionate about building software that solves real
                        problems.
                    </p>
                    <div>
                        <a href="https://twitter.com/OllieKem7">
                            <FaTwitter/>
                        </a>
                        <a href="https://github.com/OliverMengich"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/oliver-arsenal"> <FaLinkedin/> </a>
                        <a href="mailto:oliverkemei2000@gmail.com"> <FaEnvelope/> </a>
                        <a href=""> <FaPhone/> </a>
                    </div>
                </div>
                <div>
                    <h4>Navigation</h4>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Portfolio</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
             </footer>
    )
}