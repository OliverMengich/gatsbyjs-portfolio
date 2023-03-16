import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
    *{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-color: rgba(6, 31, 36, 0.95);
        width: 100%;
        overflow-x: hidden;
        height: 100%;
        background-repeat: no-repeat;
    }
    html{
    }
`;
const Header = styled.header`
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index:22;
    box-sizing: border-box;
    @media (min-width: 768px){
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 768px){
        background-color: #01181d;
        padding: 10px;
    }
    
`;
const NavList = styled.ul`
    list-style: none;
    padding: 1rem;
    @media screen and (min-width: 768px){
        display: flex;
        padding: 0;
        background-color: light-blue;
    }
    float: right;
    @media screen and (max-width: 768px){
        z-index: 22;
        position: absolute;
        right: 0;
        width: 70%;
        background-color: #01181d;
        display: none;
    }
`;
const NavActions = styled.div`
    float: right;
    position: relative;
    @media screen and (max-width: 768px){
        button{
            display: block;
        }
    }
`
const List = styled.li`
    color: white;
    margin: 10px;
    @media screen and (max-width: 768px){
        border-bottom: 1px solid #fff;
    }
`;
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
const Logo = styled.h1`
    font-size: calc(1.5rem + 2vw);
    font-weight: bold;
    color: #fff;
    font-family: 'Fruktur', cursive;
    display: inline-block;
`;
const Link = styled.a`
    text-decoration: none;
    color: white;
`;
const Bars = styled.button`
    display: none;
    cursor: pointer;
    font-size: 20px;
    border: 1px solid white;
    padding: 5px 12px;
    border-radius: 10px;
    @media (max-width: 768px){
        display: block;
        float: right;
        margin-top: 30px;
    }
`;
type PageData = {
    children: React.ReactNode
}
const Layout =({children}: PageData )=>{
    return(
        <>
            <GlobalStyle/>
            <body>
                <Header>
                    <Logo>
                        Oliver Kipkemei
                    </Logo>
                    <NavList>
                        <List >
                            <Link href="/">Home</Link>
                        </List>
                        <List>
                            <Link href="/about">About</Link>
                        </List>
                        <List>
                            <Link href="/blogs">Blogs</Link>
                        </List>
                        <List>
                            <Link href="/projects">Projects</Link>
                        </List>
                        <List>
                            <Link href="/contact">Contact</Link>
                        </List>
                        <NavActions style={{position:'relative'}}>
                            <Button >Hire Me</Button>
                            <button style={{fontSize: '20px',background: 'none',color: 'white',border:'none'}} > &#9728;</button>
                        </NavActions>
                    </NavList>
                    <Bars>&#x2630;</Bars>
                </Header>
                {children}
            </body>
        </>
    )
}
export default Layout;