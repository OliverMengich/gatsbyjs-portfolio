import React from 'react';
type PageInfoDetails={
    title: string
    path: string
    theme?:{
        backgroundColor: string,
        color: string,
        aboutMeTheme: {
            backgroundColor: string,
        },
    }
}
import styled from 'styled-components';

const PageInfo = styled.div`
    width: 100%;
    text-align: center;
    padding: 2vw 0;
`;
const PageInfoh2 = styled.h2`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
    line-height: 40px;
    font-weight: bold;
    color: inherit;
`;
const PageInfoP = styled.p`
    font-size: 1rem;
    vertical-align: middle;
    font-size: 18px;
    line-height: 1.5;
    color: inherit;
    letter-spacing: .5px;
`;
const PageInfoA = styled.a`
    text-decoration: none;
    color: inherit;
`;
function PageInfoComponent(props:PageInfoDetails) {
    return (
        <PageInfo 
            style={{
                backgroundColor: props.theme?.backgroundColor!=='white'?'#01181d':'#ccc',
            }}
        >
            <PageInfoh2>{props.title}</PageInfoh2>
            <PageInfoP><PageInfoA href='/'>Home</PageInfoA> &nbsp;&nbsp;»&nbsp;&nbsp; {props.path} </PageInfoP>
        </PageInfo>
    );
}

export default PageInfoComponent;