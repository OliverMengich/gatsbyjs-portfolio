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
        background-color: rgba(4, 4, 68, 1);
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @media screen and (min-width: 768px){
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    
`;
const NavList = styled.ul`
    list-style: none;
    @media screen and (min-width: 768px){
        display: flex;
        background-color: light-blue;
    }
    float: right;
`;
const List = styled.li`
    color: white;
    margin: 10px;
`;
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
const Logo = styled.h1`
    font-size: 4vw;
    font-weight: bold;
    color: #fff;
    font-family: 'Fruktur', cursive;
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
                    {/* <div>&#x2630;</div> */}
                    <NavList>
                        <List >Home</List>
                        <List>About</List>
                        <List>Blogs</List>
                        <List>Contact</List>
                        <Button >Hire Me</Button>
                        <button style={{fontSize: '20px',background: 'none',color: 'white',border:'none'}} > &#9728;</button>
                    </NavList>
                </Header>
                {children}
            </body>
        </>
    )
}
export default Layout;