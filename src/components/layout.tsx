import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
    }
    body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-color: rgba(6, 31, 36, 0.95);
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
    }
    html{
    }
`;
const Header = styled.header`
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index:22;
    box-sizing: border-box;
    background-color: rgba(6, 31, 36, 0.95);
    @media screen and (min-width: 768px){
        align-items: center;
        display: flex;
        justify-content: space-between;
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
    font-size: 3vw;
    font-weight: bold;
    color: #fff;
    font-family: 'Fruktur', cursive;
`;
const Link = styled.a`
    text-decoration: none;
    color: white;
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
                </Header>
                {children}
            </body>
        </>
    )
}
export default Layout;